import { CollectionConfig } from 'payload/types';
import 'grapesjs/dist/css/grapes.min.css';
import pagebuilder from "../components/PageBuilder"
const PageBuilderCollection: CollectionConfig = {
  slug: 'page_builder',

  access: {
    read: () => true,
    create: () => false,
  },
  fields: [
    {
      name: 'page_builder',
      type: 'ui',
      label: 'Page Builder',
      admin: {
        components: {
          Field: pagebuilder,
          Cell: pagebuilder,
        }
      }
    },
  ],
};

export default PageBuilderCollection;
