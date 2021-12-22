import { defineHook } from "@directus/extensions-sdk";
import nodemailer from "nodemailer";

type TUserDataEmail = {
  email: string;
};

type TInput = {
  jawaban?: string;
  status?: string;
};

export default defineHook(({ filter }, { /* services,  */exceptions }) => {
  // const { MailService } = services;
  const { ServiceUnavailableException, InvalidPayloadException } = exceptions;

  filter(
    "feedback.items.update",
    async function (input: TInput, { keys }, { database, schema }) {
      if (!input.jawaban) {
        throw new InvalidPayloadException("Jawaban harus memiliki isi");
      }
      // const mailService = new MailService({ schema });
      const transport = nodemailer.createTransport({
        host: process.env.EMAIL_SMTP_HOST as string,
        port: parseInt(process.env.EMAIL_SMTP_PORT as string),
        auth: {
          user: process.env.EMAIL_SMTP_USER,
          pass: process.env.EMAIL_SMTP_PASSWORD,
        },
      });
      transport.setupProxy("http://192.168.1.28:3128")
      try {
        let userData = await database<TUserDataEmail>("feedback")
          .select("email")
          .where("feedback_id", keys[0])
          .first();
        if (!userData) throw new Error("Somehow user data doesn't exist");
        // await mailService.send({
        await transport.sendMail({
          from: `SIPULAU BIG <${process.env.EMAIL_FROM}>`,
          to: userData.email,
          subject: "Feedback SIPULAU",
          html: input.jawaban,
        });
      } catch (error) {
        throw new ServiceUnavailableException(error);
      }
      input.status = "answered";
      return input;
    }
  );
});
