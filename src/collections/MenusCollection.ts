import { GlobalConfig } from 'payload/types';
import Menus from '../components/Menus';

const MenusCollection: GlobalConfig = {
  slug: 'menus',
  access: {
    read: () => true,
    update: () => true,
  },
  admin: {
    components: {
      views: {
        Edit: Menus,
      },
    },
  },
  fields: [],
};

export default MenusCollection;
