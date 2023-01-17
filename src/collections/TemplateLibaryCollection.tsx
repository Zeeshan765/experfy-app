import { CollectionConfig } from 'payload/types';
import TemplatesLibrary from '../components/TemplateLibrary';

const TemplateLibraryCollection: CollectionConfig = {
  slug: 'templates-library',
  labels: {
    singular: 'Template Library',
    plural: 'Template Libraries',
  },
  // access: {
  //   read: () => true,
  //   create: () => false,
  // },
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  admin: {
    components: {
      views: {
        List: TemplatesLibrary,
      },
    },
  },
  fields: [],
};
export default TemplateLibraryCollection;
