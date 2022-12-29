import { CollectionConfig } from 'payload/types';
import ImgText from '../components/PageBuilder/NewSectionTemplate/ImageAndText';

const ImgTextCollection: CollectionConfig = {
  slug: 'image_and_text',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: ImgText,
        List: ImgText,
      },
    },
  },
  fields: [],
};

export default ImgTextCollection;
