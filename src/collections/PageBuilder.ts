import 'grapesjs/dist/css/grapes.min.css';
import { CollectionConfig } from 'payload/types';
import PageBuilder from '../components/PageBuilder';

const PageBuilderCollection: CollectionConfig = {
  slug: 'page-builder',

  access: {
    read: () => true,
    create: () => false,
  },
  fields: [
    {
      name: 'Page Builder',
      type: 'ui',
      label: 'Page Builder',
      admin: {
        components: {
          Field: PageBuilder,
          Cell: PageBuilder,
        }
      }
    },
  ],
};

export default PageBuilderCollection;
