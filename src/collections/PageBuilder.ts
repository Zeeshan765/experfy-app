// import 'grapesjs/dist/css/grapes.min.css';
import { CollectionConfig } from 'payload/types';
import PageBuilder from '../components/PageBuilder';

const PageBuilderCollection: CollectionConfig = {
  slug: 'page-builder',
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    components: {
      views: {
        List: PageBuilder,
        Edit: PageBuilder,
      },
    },
  },
  fields: [],
};

export default PageBuilderCollection;
