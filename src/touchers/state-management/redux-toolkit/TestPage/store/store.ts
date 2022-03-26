import { configureStore } from "@reduxjs/toolkit";
import { wordsReducer } from "src/touchers/state-management/redux-toolkit/TestPage/store/slices/Words/wordsSlice";

export const TestPageStore = configureStore({
    reducer: {
        words: wordsReducer,
    },
});

export type TestPageRootState = ReturnType<typeof TestPageStore.getState>;
export type TestPageDispatch = typeof TestPageStore.dispatch;
