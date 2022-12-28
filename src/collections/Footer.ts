import { CollectionConfig } from 'payload/types';
import Footer from '../components/PageBuilder/NewSectionTemplate/Footer';

const FooterCollection: CollectionConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Footer,
        List: Footer,
      },
    },
  },
  fields: [],
};

export default FooterCollection;
