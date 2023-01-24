import { CollectionConfig } from 'payload/types';
import PageTheme from '../components/PageBuilderTemplate';
import PageBuilder from '../components/PageBuilder/SectionTemplates';
import Payload from 'payload';
import SelectPage from '../components/selectPageCode';
import NewPageBuilder from '../components/PageBuilder';
import NewPageBuilderModel from '../components/Model/NewPageBuilder';

export type Type = {
  title: string;
  slug: string;
  pageType?: 'scratch' | 'template';
};

export const Page: CollectionConfig = {
  slug: 'pages',
  versions: true,

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pageType', 'updatedAt'],
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
      name: 'author',
      label: 'Author',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      required: true,
    },
    {
      name: 'pageType',
      label: 'Page Type',
      type: 'radio',
      required: true,
      // defaultValue: "scratch",
      admin: {
        layout: 'vertical',
        description: 'Choose how you want to create this page',
      },
      options: [
        {
          label: 'Create from scratch',
          value: 'scratch',
        },
        {
          label: 'Use a template',
          value: 'template',
        },
      ],
    },
    {
      name: 'template',
      type: 'ui',
      label: 'Template',
      admin: {
        condition: (data) => data.pageType === 'template',
        components: {
          Field: PageTheme,
        },
      },
    },
    {
      name: 'from_scratch',
      type: 'ui',
      label: 'Untitled',
      admin: {
        condition: (data) => data.pageType === 'scratch',
        components: {
          Field: NewPageBuilderModel,
        },
      },
    },
    {
      name: 'page_Id',
      type: 'ui',
      admin: {
        components: {
          Field: SelectPage,
        },
      },
    },
  ],
};

export default Page;
