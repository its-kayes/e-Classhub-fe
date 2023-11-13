import { baseApi } from "../api/baseApi";

const announcementApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAnnouncement: build.mutation({
      query: (payload) => ({
        url: `/announcement/classroom/${payload.classCode}/${payload.email}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Announcement"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAnnouncementMutation } = announcementApi;
