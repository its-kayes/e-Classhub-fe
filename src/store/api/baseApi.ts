import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `https://api.eclasshub.kayes.dev/api/v1`,
    baseUrl: `http://localhost:3000/api/v1`,
  }),
  endpoints: () => ({}),
  tagTypes: ["User", "Classroom", "People", "Tracker", "Announcement"],
});
