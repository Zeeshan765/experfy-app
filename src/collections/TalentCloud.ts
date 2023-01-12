import { CollectionConfig } from 'payload/types';
import TalentCloud from '../components/PageBuilder/NewSectionTemplate/TalentCloud';

const TalentCloudCollection: CollectionConfig = {
  slug: 'talent_cloud',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: TalentCloud,
        List: TalentCloud,
      },
    },
  },
  fields: [],
};

export default TalentCloudCollection;
