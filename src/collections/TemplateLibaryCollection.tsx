import { CollectionConfig } from "payload/types";
import TemplatesLibrary from "../components/TemplateLibrary";

 const TemplateLibraryCollection: CollectionConfig = {
  slug: "templates-library",
  labels: {
    singular: "Template Library",
    plural: "Template Librarys",
  },
  // access: {
  //   read: () => true,
  //   create: () => false,
  // },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    components: {
      views: {
        Edit: TemplatesLibrary,
      },
    },
  },
  fields: [
// {
//       type:'ui',
//         admin:{
//           components: {
//               Field: TemplatesLibrary,
//               Cell: TemplatesLibrary,
//             },
//       }
// }
  ],
};
export default TemplateLibraryCollection;
