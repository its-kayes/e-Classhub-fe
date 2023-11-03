import { baseApi } from "../api/baseApi";

const classroomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createClassroom: build.mutation({
      query: (payload) => ({
        url: "/classroom/create",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Classroom"],
    }),
    mentorClassroomList: build.mutation({
      query: (payload) => ({
        url: `/classroom/mentor/list/${payload}`,
        method: "GET",
        // params: ,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Classroom"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateClassroomMutation, useMentorClassroomListMutation } =
  classroomApi;
