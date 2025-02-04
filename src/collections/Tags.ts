import { CollectionConfig } from 'payload/types';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => false
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,  
}

export default Tags;