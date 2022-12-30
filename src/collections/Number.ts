import { CollectionConfig } from 'payload/types';
import Number from '../components/PageBuilder/NewSectionTemplate/Number';

const NumberCollection: CollectionConfig = {
  slug: 'metrics_number',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Number,
        List: Number,
      },
    },
  },
  fields: [],
};

export default NumberCollection;
