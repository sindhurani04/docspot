import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => {
        return {
          url: "users/signup",
          // url: "/api/v1/users/signup",

          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
      },
    }),
    login: builder.mutation({
      query: (data) => {
        return {
          url: "users/login",
          // url: "/api/v1/users/login",

          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApiSlice;
