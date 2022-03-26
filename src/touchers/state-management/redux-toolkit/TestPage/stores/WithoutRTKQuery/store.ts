import { configureStore } from "@reduxjs/toolkit";
import { TodoListReducer } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/slices/TodoListSlice";

export const TestPageStore = configureStore({
    reducer: {
        TodoList: TodoListReducer,
    },
});

export type TestPageRootState = ReturnType<typeof TestPageStore.getState>;
export type TestPageDispatch = typeof TestPageStore.dispatch;
