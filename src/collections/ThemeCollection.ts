import { CollectionConfig, GlobalConfig } from 'payload/types';
import ThemeStyle from '../components/PageBuilder/ThemeStyle';
const ThemeCollection: CollectionConfig = {
  labels: {
    singular: 'Theme Style',
    plural: 'Theme Styles',
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
  endpoints: [
    {
      path: "/",
      method: "get",
      handler: async (req, res, next) => {
        const { user } = req;
        const result = await req.payload.find({
          collection: "themes-style",
          limit: 0,
          depth: 0,
          where: {
            user: { equals: user.id },
          },
        });
        res.send(result);
      }
    }
  ],
  access: {
    read: () => true,
    create: () => false,
  },
 
  fields: [
    {
      name: 'user',
      type: 'text',
    },
  ],
};

export default ThemeCollection;
