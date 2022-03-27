import { configureStore } from "@reduxjs/toolkit";
import { TodoListReducer } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/slices/TodoListSlice";

export const OnlyLocalStore = configureStore({
    reducer: {
        TodoList: TodoListReducer,
    },
});

export type OnlyLocalRootState = ReturnType<typeof OnlyLocalStore.getState>;
export type OnlyLocalDispatch = typeof OnlyLocalStore.dispatch;
