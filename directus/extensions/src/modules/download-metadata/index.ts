import { defineModule } from "@directus/extensions-sdk";
import ModuleComponent from "./downloadMetadata.vue";

export default defineModule({
  id: "download-metadata",
  name: "Download Metadata",
  icon: "download",
  routes: [
    {
      path: "",
      component: ModuleComponent,
    },
  ],
});
