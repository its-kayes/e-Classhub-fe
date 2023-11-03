import { baseApi } from "../api/baseApi";

const peopleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    joinClassroom: build.mutation({
      query: (payload) => ({
        url: "/people/join-classroom",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["People"],
    }),
  }),
  overrideExisting: false,
});

export const { useJoinClassroomMutation } = peopleApi;
