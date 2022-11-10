import { Block } from 'payload/types';

export type ColumnWidth = 'half' | 'full';

export type Column = {
  content: unknown
  width: ColumnWidth
}

export type Type = {
  blockType: 'content'
  blockName?: string
  columns: Column[]
  accentLine: boolean
}

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'accentLine',
      label: 'Enable Accent Line',
      type: 'checkbox',
      defaultValue: false,
    },

  ],
};

export default Content;
