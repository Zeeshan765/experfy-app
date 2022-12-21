import { CollectionConfig, GlobalConfig } from "payload/types";
import DesignSystem from "../components/PageBuilder/DesignSystem";

const ThemeCollection: CollectionConfig = {
  labels: {
    singular: "Theme Style",
    plural: "Theme Styles",
  },
  slug: "themes",
  admin: {
    group: "Global Theme Settings",
    components: {
      views: {
        Edit: DesignSystem,
        List: DesignSystem,
      },
    },
  },
  fields: [],
};

export default ThemeCollection;
