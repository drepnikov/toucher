import { configureStore } from "@reduxjs/toolkit";
import { TodoListThunkReducer } from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/slices/TodoListSlice";

export const WithReduxThunkStore = configureStore({
    reducer: {
        TodoList: TodoListThunkReducer,
    },
});

export type WithReduxThunkRootState = ReturnType<
    typeof WithReduxThunkStore.getState
>;
export type WithReduxThunkDispatch = typeof WithReduxThunkStore.dispatch;
