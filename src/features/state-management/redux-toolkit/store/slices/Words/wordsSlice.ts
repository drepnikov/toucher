import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/features/state-management/redux-toolkit/store/store";

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
        addWord: (state, action: PayloadAction<string>) => {
            state.currentDictionary.push(action.payload);
        },
        removeWord: (state, action: PayloadAction<string>) => {
            state.currentDictionary = state.currentDictionary.filter(
                (word) => word !== action.payload
            );
        },
    },
});

export const wordsReducer = wordsSlice.reducer;
export const { removeWord, addWord } = wordsSlice.actions;

// selectors
export const selectWords = (state: RootState) => state.words.currentDictionary;
