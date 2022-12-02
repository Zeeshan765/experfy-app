import {  GlobalConfig } from "payload/types";
import Templates from "../components/Templates";


const TemplatesCollection: GlobalConfig = {
    slug: 'templates',
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
    fields: []
};

export default TemplatesCollection;