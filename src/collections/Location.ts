import { CollectionConfig } from 'payload/types';
import Location from '../components/PageBuilder/NewSectionTemplate/Location';

const LocationCollection: CollectionConfig = {
  slug: 'location',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Location,
        List: Location,
      },
    },
  },
  fields: [],
};

export default LocationCollection;
