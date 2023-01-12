import { CollectionConfig } from 'payload/types';
import Department from '../components/PageBuilder/NewSectionTemplate/Department';

const DepartmentCollection: CollectionConfig = {
  slug: 'department',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Department,
        List: Department,
      },
    },
  },
  fields: [],
};

export default DepartmentCollection;
