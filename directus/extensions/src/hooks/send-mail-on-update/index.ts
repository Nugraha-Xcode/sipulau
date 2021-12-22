import { defineHook } from "@directus/extensions-sdk";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type TUserDataEmail = {
  email: string;
};

type TInput = {
  jawaban?: string;
  status?: string;
};

interface IMySMTPTransportOptions extends SMTPTransport.Options {
  proxy: string | undefined;
}

export default defineHook(({ filter }, { services, exceptions }) => {
  // const { MailService } = services;
  const { ServiceUnavailableException, InvalidPayloadException } = exceptions;

  filter(
    "feedback.items.update",
    async function (input: TInput, { keys }, { database, schema }) {
      if (!input.jawaban) {
        throw new InvalidPayloadException("Jawaban harus memiliki isi");
      }
      // const mailService = new MailService({ schema });
      const smtpOptions: IMySMTPTransportOptions = {
        host: process.env.EMAIL_SMTP_HOST as string,
        port: parseInt(process.env.EMAIL_SMTP_PORT as string),
        auth: {
          user: process.env.EMAIL_SMTP_USER,
          pass: process.env.EMAIL_SMTP_PASSWORD,
        },
        proxy: "http://192.168.1.28:3128",
      };
      const transport = nodemailer.createTransport(smtpOptions);
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
        console.error(error)
        throw new ServiceUnavailableException(error);
      }
      input.status = "answered";
      return input;
    }
  );
});
