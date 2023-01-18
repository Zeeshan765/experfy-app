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
  fields: [
    {

      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "text",
      required: true,
    },
  ],
};

export default TemplatesCollection;
