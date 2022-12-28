import { CollectionConfig } from 'payload/types';
import Benefit from '../components/PageBuilder/NewSectionTemplate/Benefit';

const   BenefitCollection: CollectionConfig = {
  slug: 'benefit',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Benefit,
        List: Benefit,
      },
    },
  },
  fields: [],
};

export default BenefitCollection;
