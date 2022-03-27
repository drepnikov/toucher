import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITodoItem } from "src/touchers/state-management/redux-toolkit/common";

export const todoListApi = createApi({
    reducerPath: "todoListApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/",
    }),
    endpoints: (builder) => ({
        fetchTodos: builder.query<ITodoItem[], void>({
            query: () => "todos",
        }),
    }),
});

export const { useFetchTodosQuery } = todoListApi;
