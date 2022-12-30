import { CollectionConfig } from 'payload/types';
import Guideline from '../components/PageBuilder/NewSectionTemplate/Guideline';

const GuidelineCollection: CollectionConfig = {
  slug: 'guideline',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Guideline,
        List: Guideline,
      },
    },
  },
  fields: [],
};

export default GuidelineCollection;
