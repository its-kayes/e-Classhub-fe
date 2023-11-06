import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    singIn: build.mutation({
      query: (payload) => ({
        url: "/user/sign-in",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),
    signUp: build.mutation({
      query: (payload) => ({
        url: "/user/sign-up",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),
    updateNameTitle: build.mutation({
      query: (payload) => ({
        url: `/user/update-name-title/${payload.email}`,
        method: "PATCH",
        body: { name: payload.name, title: payload.title },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
      // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
      //   const { data } = await queryFulfilled;
      //   console.log(data);
      //   // Assuming the result contains updated user information
      //   const { name, title } = data as { name: string; title: string };
      //   dispatch(updateNameTitle({ name, title }));
      // },
    }),
  }),
  overrideExisting: false,
});

export const {
  useSingInMutation,
  useSignUpMutation,
  useUpdateNameTitleMutation,
} = userApi;
