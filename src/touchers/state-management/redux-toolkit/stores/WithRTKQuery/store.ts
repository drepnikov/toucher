import { configureStore } from "@reduxjs/toolkit";
import { todoListApi } from "src/touchers/state-management/redux-toolkit/stores/WithRTKQuery/todoListApi/todoListApi";

const WithRTKQueryStore = configureStore({
    reducer: {
        [todoListApi.reducerPath]: todoListApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoListApi.middleware),
});

export { WithRTKQueryStore };
