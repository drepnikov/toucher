import { configureStore } from "@reduxjs/toolkit";

export const OnlyLocalStore = configureStore({
    reducer: {},
});

export type OnlyLocalRootState = ReturnType<typeof OnlyLocalStore.getState>;
export type OnlyLocalDispatch = typeof OnlyLocalStore.dispatch;
