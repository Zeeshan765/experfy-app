import { CollectionConfig } from 'payload/types';
const CheckCollection: CollectionConfig = {
  slug: '',
  access: {
    read: () => true,
    create: () => false,
  },
  fields: [],
};

export default CheckCollection;
