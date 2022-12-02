import { GlobalConfig } from 'payload/types';
import Pages from '../components/Pages';

const PagesCollection: GlobalConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    update: () => true,
  },
  admin: {
    components: {
      views: {
        Edit: Pages,
      },
    },
  },
  fields: [],
};

export default PagesCollection;
