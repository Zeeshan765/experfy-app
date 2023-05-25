import { CollectionConfig } from 'payload/types';


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
      name: 'media',
      label: 'Media',
      type: 'text',
    //   required: true,
    },
  
    {
      name: 'sectionCode',
      label: 'Section Code',
      type: 'text',
    },
    {
      name: 'sectionHtml',
      label: 'Section Html',
      type: 'text',
    },
    {
      name: 'sectionCss',
      label: 'Section Css',
      type: 'text',
    },
  ],
};

export default SectionSaveCollection;
