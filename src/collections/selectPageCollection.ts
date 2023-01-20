import { CollectionConfig } from "payload/types";
import PageTheme from "../components/PageBuilderTemplate";
import FaceLessModel from "../components/Model";
import PageBuilder from '../components/PageBuilder/SectionTemplates';
import Templates from "../components/Templates";
import Payload from 'payload';

export type Type = {
  title: string;
  slug: string;
  pageType?: 'scratch' | 'template';
};

export const selectPageCollection: CollectionConfig = {
  slug: 'pages-select',
  versions: true,

  admin: {
    useAsTitle: 'Select Page',
    // defaultColumns: ['title', 'pageType', 'updatedAt'],
  },

  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
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
        components: {
          Field: Templates,
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
          Field: PageBuilder,
        },
      },
    },
      ],
};

export default selectPageCollection;
