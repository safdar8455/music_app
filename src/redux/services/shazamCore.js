import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "bacb3769d6msh29ccfb0c7db5041p1bdd39jsn54747fdc1c9d"
        // "9f7c18eeccmsh61488450a8ee7c1p1cb5f6jsn60c4e0545ef7"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query:  ()=> "/charts/world" }),
    getSongsByGenre: builder.query({ query:  (genre)=> `/charts/genre-world?genre_code=${genre}` }),
    getSongDetails: builder.query({ query:  ({ songid })=> `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query:  ({ songid })=> `/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query:  (artistId)=> `/artists/details?artist_id=${artistId}` }),
    getSongsByCountry: builder.query({ query:  (countryCode)=> `/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query:  (searchTerm)=> `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;
