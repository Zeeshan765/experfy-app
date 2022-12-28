import { CollectionConfig } from 'payload/types';
import Testimonial from '../components/PageBuilder/NewSectionTemplate/Testimonial';

const TestimonialCollection: CollectionConfig = {
  slug: 'testimonial',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: Testimonial,
        List: Testimonial,
      },
    },
  },
  fields: [],
};

export default TestimonialCollection;
