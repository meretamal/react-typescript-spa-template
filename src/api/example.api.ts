import { IExample } from '@/interfaces/example.interface';
import baseApi from './base.api';

const exampleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getResources: build.query<IExample[], void>({
      query: () => '/resources',
      providesTags: [{ type: 'Example', id: 'LIST' }],
    }),
    createResource: build.mutation<IExample, { foo: string }>({
      query: (body) => ({
        url: '/resources',
        method: 'POST',
        body,
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'Example', id: 'LIST' }] : [],
    }),
  }),
  overrideExisting: false,
});

export const { useGetResourcesQuery, useCreateResourceMutation } = exampleApi;
