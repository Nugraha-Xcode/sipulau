<template>
  <private-view title="Upload Shapefile">
    <div style="padding: 0 var(--content-padding)">
      <div style="margin-bottom: 1rem">
        <label for="table-selector">Select table</label>
        <v-select
          id="table-selector"
          v-model="selectedTable"
          :items="tableList"
          :disabled="tableSelectorDisable"
        />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="file-selector">Select file (.zip file, max size 5MB)</label>
        <input
          id="file-selector"
          name="file"
          type="file"
          accept="application/zip, .zip"
          :disabled="fileSelectorDisable"
          @change="fileSelectorHandler"
        />
      </div>
      <v-button :loading="uploadButtonLoading" @click="uploadButtonHandler"
        >Upload</v-button
      >
    </div>
    <v-dialog v-model="dialogActive">
      <v-sheet>
        <h2>{{ dialogContent }}</h2>
      </v-sheet>
    </v-dialog>
  </private-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { v4 as uuidv4 } from "uuid";

const SHP_UPLOAD_FOLDER_ID = "e2879c0d-735a-49e8-b828-df2518fdb645";

export default defineComponent({
  data() {
    return {
      tableList: [
        {
          text: "Titik Pulau",
          value: "titik_pulau",
        },
      ],
      selectedTable: null,
      selectedFile: null,
      tableSelectorDisable: false,
      fileSelectorDisable: false,
      uploadButtonLoading: false,
      dialogActive: false,
      dialogContent: "",
    };
  },
  inject: ["api"],
  methods: {
    fileSelectorHandler(e: Event) {
      let file = (e.target as HTMLInputElement).files[0];
      let fileType = file.type;
      let fileSize = file.size;
      if (
        (fileType === "application/zip" ||
          fileType === "application/x-zip-compressed") &&
        fileSize <= 5242880
      ) {
        this.selectedFile = file;
      } else {
        this.dialogContent = "File must be .zip and less than 5MB";
        this.dialogActive = true;
      }
    },
    async uploadButtonHandler() {
      if (this.selectedTable && this.selectedFile) {
        this.uploadButtonLoading = true;
        this.tableSelectorDisable = true;
        this.fileSelectorDisable = true;

        let formData = new FormData();
        let fileId = uuidv4();
        let objectKey = fileId + ".zip";
        formData.append("id", fileId);
        formData.append("storage", "minioshp");
        formData.append("filename_disk", objectKey);
        formData.append("title", "shp-upload-temp_" + new Date().toISOString());
        formData.append("type", "application/zip");
        formData.append("folder", SHP_UPLOAD_FOLDER_ID);
        formData.append("file", this.selectedFile);

        try {
          await this.api.post("/files", formData);
          await this.api.post("/inform-worker-to-process-shp", {
            dataType: this.selectedTable,
            objectKey,
          });
          this.dialogContent = "Upload success";
        } catch (error) {
          this.dialogContent = "Upload failed";
          console.error(error);
        } finally {
          this.dialogActive = true;
          this.uploadButtonLoading = false;
          this.tableSelectorDisable = false;
          this.fileSelectorDisable = false;
        }
      } else {
        this.dialogContent = "Please select table and file to be uploaded";
        this.dialogActive = true;
      }
    },
  },
});
</script>
