import { CollectionConfig, GlobalConfig } from 'payload/types';
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
    defaultColumns: ['title', 'nav'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Menu Title',
      type: 'text',
      required: true,
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
