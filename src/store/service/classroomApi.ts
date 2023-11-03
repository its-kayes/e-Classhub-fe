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
    classroomList: build.mutation({
      query: (payload) => ({
        url: `/classroom/${payload.type}/list/${payload.email}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Classroom"],
    }),
    findClassroom: build.mutation({
      query: (payload) => ({
        url: `classroom/find/${payload.room}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Classroom"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateClassroomMutation,
  useClassroomListMutation,
  useFindClassroomMutation,
} = classroomApi;
