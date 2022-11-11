import { CollectionConfig } from 'payload/types';
import PI from '../components/PI';

const PICollection: CollectionConfig = {
    slug: 'pi',
    admin: {
        components: {
            views: {
                Edit: PI,
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
    ],
    timestamps: false,
}

export default PICollection;