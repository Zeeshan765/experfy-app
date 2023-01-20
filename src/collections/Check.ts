import { CollectionConfig } from 'payload/types';
import Header from '../components/PageBuilder/NewSectionTemplate/Header';

const CheckCollection: CollectionConfig = {
  slug: '',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Header,
        List: Header,
      },
    },
  },
  fields: [],
};

export default CheckCollection;
