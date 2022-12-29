import {configureStore } from "@reduxjs/toolkit";
import {constensApi} from './features/services'


 const Store= configureStore({
    reducer:{
    [constensApi.reducerPath]:constensApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(constensApi.middleware)
});

export default Store;