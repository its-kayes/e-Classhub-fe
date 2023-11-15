import { baseApi } from "../api/baseApi";

const trackerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    logInfo: build.mutation({
      query: (payload) => ({
        url: `/tracker/user-history/${payload.email}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Tracker"],
    }),
  }),
  overrideExisting: false,
});

export const { useLogInfoMutation } = trackerApi;
