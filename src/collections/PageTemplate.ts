import { CollectionConfig } from 'payload/types';
import PageTheme from '../components/PageBuilderTemplate';
import FaceLessModel from '../components/Model';
import PageTemplates from '../components/pageTemplates';
export type Type = {
  title: string;
  slug: string;
  pageType?: 'scratch' | 'template';
};

export const PageTemplateCollection: CollectionConfig = {
  slug: 'page-Template',

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "pageType", "updatedAt"],
    disableDuplicate: true,
    
    components: {
      views: {
        Edit: PageTemplates ,
      
        // List: Pages,
      },
    },
  },

  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'pageThumnail',
      label: 'Page Thumnail',
      type: 'text',
    },
    {
      name: 'pageCode',
      label: 'Page Code',
      type: 'text',
    },
  ],
};

export default PageTemplateCollection;
