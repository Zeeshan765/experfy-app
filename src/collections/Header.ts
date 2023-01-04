import { CollectionConfig } from 'payload/types';
import Header from '../components/PageBuilder/NewSectionTemplate/Header';

const HeaderCollection: CollectionConfig = {
  slug: 'header',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        List: Header,
      },
    },
  },
  fields: [],
};

export default HeaderCollection;
