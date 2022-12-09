import { GlobalConfig, CollectionConfig } from "payload/types";
import Pages from "../components/Pages";

const PagesCollection: CollectionConfig = {
  slug: "xpagex",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [],
};

export default PagesCollection;
