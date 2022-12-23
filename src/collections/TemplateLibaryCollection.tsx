import { CollectionConfig } from "payload/types";
import TemplatesLibrary from "../components/TemplateLibrary";

 const TemplateLibraryCollection: CollectionConfig = {
  slug: "templates-library",
  labels: {
    singular: "Template Library",
    plural: "Template Library",
  },
  // access: {
  //   read: () => true,
  //   create: () => false,
  // },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
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
