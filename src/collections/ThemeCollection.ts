import { CollectionConfig, GlobalConfig } from 'payload/types';
import DesignSystem from '../components/PageBuilder/DesignSystem';

const ThemeCollection: CollectionConfig = {
  labels: {
    singular: 'Theme Style',
    plural: 'Theme Styles',
  },
  access: {
    read: () => true,
    create: () => false,
  },
  slug: 'themes-style',
  admin: {
    group: 'Global Theme Settings',
    components: {
      views: {
        List: DesignSystem,
      },
    },
  },
  fields: [],
};

export default ThemeCollection;
