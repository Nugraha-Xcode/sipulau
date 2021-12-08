import { defineHook } from "@directus/extensions-sdk";

type TFileIds = {
  id: string;
};

const tempFolderId = [
  "45f438ab-3124-43aa-90ac-b52d1954c95b", // user downloads
  "e2879c0d-735a-49e8-b828-df2518fdb645", // shp uploads
];

export default defineHook(
  async ({ schedule }, { database, services, getSchema }) => {
    const { FilesService } = services;

    const schema = await getSchema({ database });
    const fileService = new FilesService({ schema });

    // runs every day at 00:00
    schedule("0 0 * * *", async () => {
      let fileIds: TFileIds[] = await database({ f: "directus_files" })
        .select("f.id")
        .whereRaw("CURRENT_TIMESTAMP - f.uploaded_on >= INTERVAL '1 hour'")
        .where("f.storage", "minioshp")
        .whereIn("f.folder", tempFolderId);

      if (fileIds.length > 0) {
        let fileIdArr = fileIds.map((el) => el.id);
        await fileService.deleteMany(fileIdArr);
      }
    });
  }
);
