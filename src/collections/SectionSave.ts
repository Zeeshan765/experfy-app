import { CollectionConfig } from 'payload/types';
// export type Type = {
//   title: string;
//   slug: string;
//   pageType?: 'scratch' | 'template';
// };

export const SectionSaveCollection: CollectionConfig = {
  slug: 'section-save',

 
  

  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section Title',
      type: 'text',
    //   required: true,
    },
    {
      name: 'category',
      label: 'Section Category',
      type: 'text',
    //   required: true,
    },
  
    {
      name: 'sectionCode',
      label: 'Section Code',
      type: 'text',
    },
  ],
};

export default SectionSaveCollection;
