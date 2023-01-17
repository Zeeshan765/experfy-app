import { CollectionConfig } from 'payload/types';
// import PracticeArea from '../components/PageBuilder/NewSectionTemplate/PracticeArea';

const PracticeAreaCollection: CollectionConfig = {
  slug: 'practice_area',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        // Edit: PracticeArea ,
        // List: PracticeArea,
      },
    },
  },
  fields: [],
};

export default PracticeAreaCollection;
