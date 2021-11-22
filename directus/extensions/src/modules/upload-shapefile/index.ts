import { defineModule } from "@directus/extensions-sdk";
import ModuleComponent from "./uploadShapefile.vue";

export default defineModule({
  id: "upload-shapefile",
  name: "Upload Shapefile",
  icon: "upload",
  routes: [
    {
      path: "",
      component: ModuleComponent,
    },
  ],
});
