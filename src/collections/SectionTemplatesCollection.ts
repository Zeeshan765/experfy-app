import { CollectionConfig } from 'payload/types';
import SectionPageBuilder from '../components/PageBuilder/SectionTemplates';

const SectionTemplateCollection: CollectionConfig = {
  labels: {
    singular: 'Section Template',
    plural: 'Section Templates',
  },
  slug: 'section-templates',

  access: {
    read: () => true,
    create: () => false,
  },

  admin: {
    group: 'Global Theme Settings',
    useAsTitle: 'title',
    description: 'Start customizing your portal',

    components: {
      views: {
        List: SectionPageBuilder,
      },
    },
  },
  fields: [],
};

export default SectionTemplateCollection;
