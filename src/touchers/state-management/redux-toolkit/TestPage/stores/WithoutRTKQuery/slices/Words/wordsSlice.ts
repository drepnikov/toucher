import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestPageRootState } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/store";
import {
    fetchWords,
    IWord,
} from "src/touchers/state-management/redux-toolkit/TestPage/api/fetchWords";

interface IWordsInitialState {
    currentDictionary: IWord[];
    loading: boolean;
}

const initialState: IWordsInitialState = {
    currentDictionary: [],
    loading: false,
};

export const fetchWordsAsync = createAsyncThunk(
    "Words/fetchWordsAsync",
    async () => {
        const response = await fetchWords();

        return response.items;
    }
);

const wordsSlice = createSlice({
    name: "Words",
    initialState,
    reducers: {
        addWordToDictionarySync: (state, action: PayloadAction<IWord>) => {
            state.currentDictionary.push(action.payload);
        },
        removeWordFromDictionarySync: (state, action: PayloadAction<IWord>) => {
            state.currentDictionary = state.currentDictionary.filter(
                (word) => word.id !== action.payload.id
            );
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchWordsAsync.pending, (store) => {
                store.loading = true;
            })
            .addCase(fetchWordsAsync.fulfilled, (store, action) => {
                store.loading = false;
                store.currentDictionary = action.payload;
            });
    },
});

export const wordsReducer = wordsSlice.reducer;
export const { removeWordFromDictionarySync, addWordToDictionarySync } =
    wordsSlice.actions;

// selectors
export const selectWords = (state: TestPageRootState) =>
    state.words.currentDictionary;
export const selectLoadingStatus = (state: TestPageRootState) =>
    state.words.loading;
