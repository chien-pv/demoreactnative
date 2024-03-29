import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const fetchAlbum = createApi({
  reducerPath: 'fetchAlbum',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getAllAlbum: builder.query({
      query: () => `albums/`,
    }),
    getAlbumById: builder.query({
      query: id => `albums/${id}`,
    }),
  }),
});

export const {useGetAllAlbumQuery, useGetAlbumByIdQuery} = fetchAlbum;
