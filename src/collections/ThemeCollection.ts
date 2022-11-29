import {  GlobalConfig } from "payload/types";
import Themes from "../components/Themes";


const ThemeCollection: GlobalConfig = {
    slug: 'themes',
    access: {
        read: () => true,
        update: () => true,
    },
    admin: {
        components: {
            views: {
                Edit: Themes,
            },
        },
    },
    fields: []
};

export default ThemeCollection;