import { CollectionConfig } from "payload/types";
import Global from "../components/PageBuilder/GlobalThemeSettings";


const GlobalThemeSettings: CollectionConfig = {
    slug: 'global-theme-settings',
    labels: {
        singular: 'Global Theme Settings',
        plural: 'Global Theme Settings'
    },
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