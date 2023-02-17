import { CollectionConfig } from 'payload/types';
import link, { Type as LinkType } from '../fields/link';

export type Type = {
  nav: {
    link: LinkType[];
  }[];
};

const Menu: CollectionConfig = {
  slug: 'mega-menu',
  labels: { singular: 'Menu', plural: 'Menus' },

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'parent_menu', 'nav'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Menu Title',
      type: 'text',
      required: true,
    },
    {
      label: 'Parent Menu',
      name: 'parent_menu',
      type: 'relationship',
      relationTo: 'mega-menu',
      hasMany: false,
      required: false,
    },
    {
      name: 'menu_section',
      label: 'Menu Section',

      type: 'select',
      options: [
        {
          value: 'header',
          label: 'Header',
        },
        {
          value: 'footer',
          label: 'Footer',
        },
      ],
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [link],
    },
  ],
};

export default Menu;
