import { CollectionConfig } from "payload/types";
import TemplatesLibrary from "../components/TemplateLibrary";

 const TemplateLibraryCollection: CollectionConfig = {
  slug: "templates-library",
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: TemplatesLibrary,
      },
    },
  },
  fields: [

  ],
};
export default TemplateLibraryCollection;
