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
    makeAnnouncement: build.mutation({
      query: (payload) => ({
        url: `/announcement/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Announcement"],
    }),
    deleteAnnouncement: build.mutation({
      query: (payload) => ({
        url: `/announcement/delete`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["Announcement"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAnnouncementMutation,
  useMakeAnnouncementMutation,
  useDeleteAnnouncementMutation,
} = announcementApi;
