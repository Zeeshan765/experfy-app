import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  auth: true,

  admin: {
    useAsTitle: 'first_name' + 'last_name',
  },

  access: {
    admin: () => true,
    read: () => true,
  },

  fields: [
    // Email added by default
    {
      name: 'first_name',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
    },
    {
      name: 'role',
      label: 'Role',
      type: 'radio',
      defaultValue: 'user',
      options: [
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
    },
  ],
};

export default Users;
