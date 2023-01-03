import { CollectionConfig } from 'payload/types';

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
      defaultValue: 'scratch',
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
      },
    },
    {
      name: 'template',
      type: 'relationship',
      relationTo: 'new-page-builder',
      admin: {
        condition: (data) => data.pageType === 'scratch',
      },
    },
  ],

  hooks: {
    beforeLogin: [
      (args) => {
        console.log('before login called', args);
      },
    ],
    afterLogin: [
      (args) => {
        console.log('After Login Called', args);
      },
    ],
    afterLogout: [
      (args) => {
        console.log('After Logout Called', args);
      },
    ],

    afterRefresh: [
      (args) => {
        console.log('After Refresh Called', args);
      },
    ],
    afterMe: [
      (args) => {
        console.log('After Me Called', args);
      },
    ],
  },
};

export default Page;
