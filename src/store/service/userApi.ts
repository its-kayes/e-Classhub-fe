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
  }),
  overrideExisting: false,
});

export const { useSingInMutation, useSignUpMutation } = userApi;
