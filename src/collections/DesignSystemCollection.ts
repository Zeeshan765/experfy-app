import { CollectionConfig } from "payload/types";
import DesignSystem from "../components/PageBuilder/DesignSystem";


const DesignSystemCollection: CollectionConfig = {
    labels: {
        singular: "Design System",
        plural: "Design Systems",
    },
    slug: 'design-system',
    access: {
        read: () => true,
        create: () => false,
    },
    admin: {
        group: 'Global Theme Settings',
        components: {
            views: {
                Edit: DesignSystem,
                List: DesignSystem,
            },
        },
    },
    fields: []
};

export default DesignSystemCollection;