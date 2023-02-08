import { Field } from 'payload/types';

export type Type = {

  label: string;
 
};

const brand: Field = {
  label: 'Brand',
  name: 'brand',
  type: 'group',

  fields: [
    
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          label: 'Brand Name',
          type: 'text',
          required: true,
         
        },
        {
          name: 'identifier',
          label: 'Brand Identifier',
          type: 'text',
          required: true,
          
        },
        {
          name: 'microsite',
          label: 'Brand Microsite',
          type: 'text',
          required: true,
        
        }, 
        
      
      ],
    },

  ],
};

export default brand;
