import {  CollectionConfig, GlobalConfig } from "payload/types";
import Themes from "../components/Themes";


const ThemeCollection: CollectionConfig = {
    labels: {
        singular: "Theme Style",
        plural: "Theme Styles",
    },
    slug: 'themes',
    access: {
        read: () => true,
        update: () => true,
    },
    admin: {
        group: "Global Theme Settings",
        components: {
            views: {
                Edit: Themes,
            },
        },
    },
    fields: []
};

export default ThemeCollection;