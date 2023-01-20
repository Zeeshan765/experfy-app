import { CollectionConfig } from 'payload/types';
import PageBuilder from '../components/NewPageBuilder';

const NewPageBuilderCollection: CollectionConfig = {
  slug: 'new-page-builder',
  access: {
    read: () => true,
    create: () => false,
  },
  admin:
  {
    components: {
      views: {
        Edit: PageBuilder,
        List: PageBuilder,
      },
    }

  },
  fields: [

  ]
};

export default NewPageBuilderCollection;
