import { CollectionConfig } from 'payload/types';
import link, { Type as LinkType } from '../fields/brand';

export type Type = {
  nav: {
    link: LinkType[];
  }[];
};

const Brand: CollectionConfig = {
  slug: 'brand',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      label: 'Portal Name',
      name: 'career_portal_name',
      type: 'text',
      // defaultValue: "Career Portal",

      required: false,
    },
    {
      name: 'portal_url',
      type: 'text',
      required: false,
    },
    {
      name: 'portal_id',
      // unique: true,
      type: 'text',
    },
    {
      name: 'default_locale',
      type: 'select',
      options: ['US', 'ES'],
    },
    {
      name: 'default_language',
      type: 'select',
      options: ['English', 'Spanish'],
    },

    {
      name: 'company_name',
      type: 'text',
    },
    {
      name: 'tracking_pixel',
      type: 'text',
    },
    {
      name: 'bing_webmaster',
      type: 'text',
    },
    {
      name: 'google_webmaster',
      type: 'text',
    },
    {
      name: 'google_analytics',
      type: 'text',
    },
    {
      name: 'google_id',
      type: 'text',
    },
    {
      name: 'page_title',
      type: 'text',
    },
    {
      name: 'meta_keywords',
      type: 'text',
    },
    {
      name: 'meta_description',
      type: 'text',
    },
    // {
    //   name: 'default_brand',
    //   type: 'select',
    //   options: ['brand1', 'brand2'],
    // },
    {
      name: 'microsite_setting',
      label: 'Microsite Setting',
      type: 'radio',
      
      options: [
        {
          label: 'Sub-domains',
          value: 'sub_domain',
        },
        {
          label: 'Sub-directories',
          value: 'sub_directories',
        },
      ],
    },
    {
      name: 'brands',
      label: 'Brand',
      type: 'array',
      labels: {
        singular: 'Brand',
        plural: 'Brand',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'brand_name',
              type: 'text',
            },
            {
              name: 'brand_identifier',
              type: 'text',
            },
            {
              name: 'microsoft_identifier',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};

export default Brand;
