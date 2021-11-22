import { defineHook } from "@directus/extensions-sdk";

type TOldData = {
  status: string;
  gambar_1?: string;
  gambar_2?: string;
  gambar_3?: string;
};

type TInput = {
  status?: string;
};

const privateStatus = ["menunggu", "ditolak"];
const publicStatus = ["diterima"];
const validStatus = privateStatus.concat(publicStatus);
const privateCommentImgFolderId = "42280896-55f1-491c-bc14-f2197bc729d1";
const publicCommentImgFolderId = "e09b1bd4-8d4c-448a-b1e8-7725ce79fa88";

export default defineHook(({ filter }, { exceptions }) => {
  const { ServiceUnavailableException, InvalidPayloadException } = exceptions;

  filter(
    "komentar_pulau.items.update",
    async function (input: TInput, { keys }, { database }) {
      // check status value
      if (!input.status) {
        return input;
      } else if (!validStatus.includes(input.status)) {
        return new InvalidPayloadException(
          `Invalid new status. Must be ${validStatus.join("/")}`
        );
      }

      try {
        // get old data
        let oldData = await database<TOldData>("komentar_pulau")
          .select("status", "gambar_1", "gambar_2", "gambar_3")
          .where("komentar_id", keys[0])
          .first();

        if (!oldData) throw new Error("Somehow old data doesn't exists");

        let images = [oldData.gambar_1, oldData.gambar_2, oldData.gambar_3];

        // get image id that exists
        let validImages = [];
        for (const img of images) {
          if (img) validImages.push(img);
        }

        if (validImages.length > 0) {
          if (
            // from private to public
            privateStatus.includes(oldData.status) &&
            publicStatus.includes(input.status)
          ) {
            await database("directus_files")
              .update("folder", publicCommentImgFolderId)
              .whereIn("id", validImages);
          } else if (
            // from public to private
            publicStatus.includes(oldData.status) &&
            privateStatus.includes(input.status)
          ) {
            await database("directus_files")
              .update("folder", privateCommentImgFolderId)
              .whereIn("id", validImages);
          }
        }
        return input;
      } catch (error) {
        throw new ServiceUnavailableException(error);
      }
    }
  );
});
