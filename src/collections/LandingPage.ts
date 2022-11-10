import { CollectionConfig } from 'payload/types';
import landing from '../components/LandingPage';
import NavBar from '../components/NavBar';


const LandingCollection: CollectionConfig = {
  slug: 'landing',
  labels: {
    singular: 'Landing',
    plural: 'Landing'
  },
  admin: {
    useAsTitle: 'title',
    
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true
  },
  fields: [
    {
      name: 'landing-page-ui',
      type: 'ui',
      label: 'Home',
      admin: {
        components: {
          Field: landing,
        }
      }
    },
    {
      name: 'career_portal_name',
      type: 'text',
      hidden: true,
    },
    {
      name: 'portal_url',
      type: 'text',
      hidden: true,
    },
    {
      name: 'portal_id',
      type: 'text',
      hidden: true,
    },
    {
      name: 'company_name',
      type: 'text',
      hidden: true,
    },
  ],
};

export default LandingCollection;
