import { CollectionConfig } from 'payload/types';
import PageBuilder from '../components/PageBuilder';

const PageBuilderCollection: CollectionConfig = {
  slug: 'page-builder',

  access: {
    read: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: PageBuilder,
      },
    },
  },
  fields: [],
};

export default PageBuilderCollection;
