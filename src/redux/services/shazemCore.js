import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://in.linkedin.com/jobs/full-stack-engineer-jobs?trk=expired_jd_redirect&position=1&pageNum=0

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '071e7f6362msh3292352e4d5cf24p16f6cfjsn6ae5f141f561',
//     'X-RapidAPI-Host': '',
//   },
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  // basequery with a fiucntion call
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '071e7f6362msh3292352e4d5cf24p16f6cfjsn6ae5f141f561',
      );

      return headers;
    },
  }),
  // end points with builder as a function parameter
  endpoints: (builder) => ({
    // gettocharts as a hook used
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
