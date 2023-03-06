import {CollectionConfig} from 'payload/types';
const PageHistory:CollectionConfig ={
slug:'pagehistory',
labels:{
singular:'Page History',
plural:'Page Histories',
},

fields:[
    // {
    //     name:'pageTitle',
    //     type:'text',
    //     label:'Page Title',
    // },
    {
        name:'PageId',
        type:'text',
        label:'Page Id',
    },
    {name:'pageHistory',
    type:'text',
    label:'Page History',}
    // {
    //     name:'pageHistory',
    //     type:'array',
    //     fields:[
    //         {
    //             name:'timeStump',
    //             label:'Time Stump',
    //             type:'text',
    //         },
    //         {
    //             name:'pageContent',
    //             type:'text',
    //             label:'Page Content',
    //         }
    //     ]
    // }

]
}

export default PageHistory;