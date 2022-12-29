import { CollectionConfig } from 'payload/types';
import Paragraph from '../components/PageBuilder/NewSectionTemplate/Paragraph';

const ParagraphCollection: CollectionConfig = {
  slug: 'paragraph',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Paragraph,
        List: Paragraph,
      },
    },
  },
  fields: [],
};

export default ParagraphCollection;
