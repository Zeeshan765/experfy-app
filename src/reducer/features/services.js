import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiEndPoint } from "../../services";

export const constensApi = createApi({
  reducerPath: "constensApi", // reducerpath same as constensApi
  baseQuery: fetchBaseQuery({
    baseUrl:apiEndPoint,
  }), // baseUrl of Api
  endpoints: (builder) => ({
    getMedia:builder.query({
        query:()=>'/media'
    })
  }),
});

export const { useGetMediaQuery } = constensApi;
