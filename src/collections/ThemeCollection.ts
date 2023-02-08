import { CollectionConfig, GlobalConfig } from 'payload/types';
import ThemeStyle from '../components/PageBuilder/ThemeStyle';
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
        List: ThemeStyle,
      },
    },
  },
  fields: [],
};

export default ThemeCollection;
