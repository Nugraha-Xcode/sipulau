<template>
  <private-view title="Upload Shapefile">
    <div style="padding: 0 var(--content-padding)">
      <div style="margin-bottom: 1rem">
        <label for="table-selector">Select table</label>
        <v-skeleton-loader v-if="fetchingTables" />
        <div v-else-if="fetchTableError">
          <p>Error fetching table list</p>
          <v-button @click="fetchTables">Retry</v-button>
        </div>
        <v-select
          v-else
          id="table-selector"
          v-model="selectedTable"
          :items="tableList"
          :disabled="tableSelectorDisable"
        />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="file-selector"
          >Select file (.zip file, max size 10MB)</label
        >
        <input
          id="file-selector"
          name="file"
          type="file"
          accept="application/zip, .zip"
          :disabled="fileSelectorDisable"
          @change="fileSelectorHandler"
        />
      </div>
      <v-button
        :loading="uploadButtonLoading"
        :disabled="uploadButtonDisable"
        @click="uploadButtonHandler"
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

export default defineComponent({
  data() {
    return {
      fetchingTables: true,
      fetchTableError: false,
      tableList: [],
      selectedTable: null,
      selectedFile: null,
      tableSelectorDisable: true,
      fileSelectorDisable: true,
      uploadButtonDisable: true,
      uploadButtonLoading: false,
      dialogActive: false,
      dialogContent: "",
    };
  },
  created() {
    this.fetchTables();
  },
  inject: ["api"],
  methods: {
    async fetchTables() {
      this.fetchingTables = true;
      this.fetchTableError = null;
      // TODO
      try {
        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            this.tableList = [
              {
                text: "Item 1",
                value: "item-1",
              },
              {
                text: "Item 2",
                value: "item-2",
              },
            ];
            resolve();
            // reject("test reject");
          }, 2000);
        });
        this.tableSelectorDisable = false;
        this.fileSelectorDisable = false;
        this.uploadButtonDisable = false;
      } catch (error) {
        this.fetchTableError = true;
        console.error(error);
      } finally {
        this.fetchingTables = false;
      }
    },

    fileSelectorHandler(e: Event) {
      let file = (e.target as HTMLInputElement).files[0];
      let fileType = file.type;
      let fileSize = file.size;
      if (
        (fileType === "application/zip" ||
          fileType === "application/x-zip-compressed") &&
        fileSize <= 10485760
      ) {
        this.selectedFile = file;
      } else {
        this.dialogContent = "File must be .zip and less than 10MB";
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
        formData.append("id", fileId);
        formData.append("storage", "minioshp");
        formData.append("filename_disk", "shp-uploads/" + fileId + ".zip");
        formData.append("title", "shp-upload-temp_" + new Date().toISOString());
        formData.append("type", "application/zip");
        formData.append(
          "metadata",
          JSON.stringify({ table: this.selectedTable })
        );
        formData.append("file", this.selectedFile);

        try {
          await this.api.post("/files", formData);
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
