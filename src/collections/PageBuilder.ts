import 'grapesjs/dist/css/grapes.min.css';
import { CollectionConfig } from 'payload/types';
import PageBuilder from '../components/PageBuilder/SectionTemplates';

const PageBuilderCollection: CollectionConfig = {
  slug: 'page-builder',
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

export default PageBuilderCollection;
