import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `https://api.proggamoyquran.com/api/v1`,
    baseUrl: `https://pro.proggamoyquran.com/api/v1`,
    // baseUrl: `https://dev.proggamoyquran.com/api/v1`,
    // baseUrl: `http://localhost:3000/api/v1`,
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Musafs",
    "Variants",
    "SurahInfos",
    "Word",
    "Tafsirs",
    "Qaris",
    "AyatAudio",
  ],
});
