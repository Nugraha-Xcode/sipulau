import { defineHook } from "@directus/extensions-sdk";

type TFileIds = {
  id: string;
};

const uploadFolderIds = [
  "5d9f7ec9-12bc-40f4-82f2-3a733224b28b", //islandDoc
  "42280896-55f1-491c-bc14-f2197bc729d1", //islandImg
  "50d9f4ff-ca77-4a11-9d02-ed378a10cb8a", //pointDoc
  "f24126b6-f758-40e5-ad68-9ee772741a39", //pointImg
];

export default defineHook(
  async ({ schedule }, { database, services, getSchema }) => {
    const { FilesService } = services;

    const schema = await getSchema({ database });
    const fileService = new FilesService({ schema });

    // runs every sunday at 00:00
    schedule("0 0 * * 0", async () => {
      let fileIds: TFileIds[] = await database({ f: "directus_files" })
        .select("f.id")
        .leftJoin({ kp: "komentar_pulau" }, function () {
          this.on("f.id", "kp.gambar_1")
            .orOn("f.id", "kp.gambar_2")
            .orOn("f.id", "kp.gambar_3")
            .orOn("f.id", "kp.dokumen");
        })
        .leftJoin({ kt: "komentar_titik" }, function () {
          this.on("f.id", "kt.gambar_1")
            .orOn("f.id", "kt.gambar_2")
            .orOn("f.id", "kt.gambar_3")
            .orOn("f.id", "kt.dokumen");
        })
        .where(
          "f.uploaded_on",
          ">",
          // added 1 minute more just in case of late invocation
          database.raw("CURRENT_TIMESTAMP - INTERVAL '1 week 1 minutes'")
        )
        .where("f.storage", "minio")
        .whereIn("f.folder", uploadFolderIds)
        .whereNull("kp.gambar_1")
        .whereNull("kp.gambar_2")
        .whereNull("kp.gambar_3")
        .whereNull("kp.dokumen")
        .whereNull("kt.gambar_1")
        .whereNull("kt.gambar_2")
        .whereNull("kt.gambar_3")
        .whereNull("kt.dokumen");

      if (fileIds.length > 0) {
        let fileIdArr = fileIds.map((el) => el.id);
        await fileService.deleteMany(fileIdArr);
      }
    });
  }
);
