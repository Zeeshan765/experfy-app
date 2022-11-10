/* eslint-disable jsx-a11y/anchor-is-valid */

import { Block } from 'payload/types';


export type Button = {
  label: string
}
export type Type = {
  blockType: 'atb'
  blockName?: string
  content: unknown
  buttons: Button[]
}

type Data = Record<string, unknown>;


export const AddToBrand: Block = {
  slug: 'atb',

  labels: {
    singular: 'Add To Brand',
    plural: 'Add To Brand',
  },
 
  fields: [

  
    {
      type: 'row',
      fields: [
        {
          name: 'brand_name',
          label: 'Brand Name',
          type: 'text',
          required: true,
          admin: {
            width: '30%',
          },
        },
        {
          name: 'brand_identifier',
          label: 'URL BRAND IDENTIFIER',
          type: 'text',
          required: true,
          admin: {
            width: '30%',
          },
        },
        {
          name: 'microsite_identifier',
          label: 'MICROSITE IDENTIFIER',
          type: 'text',
          required: true,
          admin: {
            width: '40%',
            // components:{
            //   providers:[Check]
            // }
          },


        },
      
       
      ],
    },
 
   
    
  ],


  
};



export const Component: React.FC<Type> = (props) => {


  return (
  <h1>Hello WOrld</h1>
  );
};
