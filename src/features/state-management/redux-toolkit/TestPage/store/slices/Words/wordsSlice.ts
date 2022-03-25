import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestPageRootState } from "src/features/state-management/redux-toolkit/TestPage/store/store";

interface IWordsInitialState {
    currentDictionary: string[];
}

const initialState: IWordsInitialState = {
    currentDictionary: ["i am going outside", "i'm not going outside"],
};

const wordsSlice = createSlice({
    name: "Words",
    initialState,
    reducers: {
        addWordToDictionary: (state, action: PayloadAction<string>) => {
            state.currentDictionary.push(action.payload);
        },
        removeWordFromDictionary: (state, action: PayloadAction<string>) => {
            state.currentDictionary = state.currentDictionary.filter(
                (word) => word !== action.payload
            );
        },
    },
});

export const wordsReducer = wordsSlice.reducer;
export const { removeWordFromDictionary, addWordToDictionary } =
    wordsSlice.actions;

// selectors
export const selectWords = (state: TestPageRootState) =>
    state.words.currentDictionary;
