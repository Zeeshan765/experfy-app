import { CollectionConfig, CollectionBeforeOperationHook } from 'payload/types';
import payload from 'payload';
import { inserDefaultSectionTemplates } from '../utilities/seedDefaultData';

const beforeOperationHook: CollectionBeforeOperationHook = async ({
  args, // Original arguments passed into the operation
  operation, // name of the operation
}) => {
  if (operation === 'read') {
    let blockId = args?.req?.query?.blockId;

    if (blockId) {
      const result = await payload.find({
        collection: 'section-templates-list',
        page: 1,
        limit: 1,
        where: { blockId: blockId },
      });

      if (result.docs.length === 0) {
        inserDefaultSectionTemplates();
      }
    }
  }

  return args; // Return operation arguments as necessary
};

const SectionBuilder: CollectionConfig = {
  //   label: 'Section Template List',
  slug: 'section-templates-list',
  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },

  admin: {
    // group: 'Global Theme Settings',
    useAsTitle: 'title',
    description: 'Start customizing your portal',
  },
  fields: [
    {
      name: 'blockId',
      label: 'Section Title',
      type: 'text',
    },
    {
      name: 'category',
      label: 'Category',
      type: 'text',
    },
    {
      name: 'media',
      label: 'Media',
      type: 'text',
    },
    {
      name: 'blockHtml',
      label: 'Section Html',
      type: 'text',
    },
    {
      name: 'blockCss',
      label: 'Section Css',
      type: 'text',
    },
  ],
  hooks: {
    beforeOperation: [beforeOperationHook],
  },
};

export default SectionBuilder;
