import { CollectionConfig } from 'payload/types';
import PageBuilder from '../components/PageBuilder';

const PageBuilderCollection: CollectionConfig = {
  slug: 'page-builder',
  access: {
    read: () => true,
    create: () => true,
    update: () => false,
  },
  admin: {
    components: {
      views: {
        List: PageBuilder,
      },
    },
  },
  fields: [],
};

export default PageBuilderCollection;
