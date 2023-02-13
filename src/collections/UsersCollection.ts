import { CollectionBeforeLoginHook, CollectionConfig } from 'payload/types';

const LOGIN_API_URL = 'https://landing-ui-service.develop.experfy.com/login';
const checkUser: CollectionBeforeLoginHook = async ({ req, user }) => {
  const { email, password } = req.body;
  // const { token } = useParams<{ token?: string }>();

  // const validUser = await payload.find(user);
  // payload.logger.info(validUser);

  const response = await fetch(LOGIN_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'ali.raza@algorepublic.com',
      password: 'ars@123456',
    }),
  }).then((response) => response.json().then((data) => data));
  console.log(response.access_token); //access token on login
  user.auth = {
    tokenExpiration: response.expires_in,
  };
  if (!user) {
    throw new Error('User not found');
  }
};
const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  auth: true,

  admin: {
    useAsTitle: 'first_name',
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
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
    {
      name: 'defaultStyle',
      label: 'Default Style',
      type: 'json',
      admin: {
        hidden: true,
      }
    },
  ],
  hooks: {
    beforeLogin: [checkUser],
  },
};

export default Users;
