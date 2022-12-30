import { CollectionConfig } from 'payload/types';
import Form from '../components/PageBuilder/NewSectionTemplate/Form';

const FormCollection: CollectionConfig = {
  slug: 'form',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Form,
        List: Form,
      },
    },
  },
  fields: [],
};

export default FormCollection;
