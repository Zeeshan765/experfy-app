import { CollectionConfig, GlobalConfig } from "payload/types";
import Global from "../components/PageBuilder/GlobalThemeSettings";


const GlobalThemeSettings: GlobalConfig = {
    slug: 'global-theme-settings',
    access: {
        read: () => true,
        update: () => true,
    },
    admin: {
        components: {
            views: {
                Edit: Global,
            },
        },
    },
    fields: []
};

export default GlobalThemeSettings;