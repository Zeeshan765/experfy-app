import { CollectionConfig } from "payload/types";
import Templates from "../components/Templates";

const TemplatesCollection: CollectionConfig = {
  slug: "templates",
  access: {
    read: () => true,
    update: () => true,
  },
  admin: {
    components: {
      views: {
        Edit: Templates,
      },
    },
  },
  fields: [],
};

export default TemplatesCollection;

