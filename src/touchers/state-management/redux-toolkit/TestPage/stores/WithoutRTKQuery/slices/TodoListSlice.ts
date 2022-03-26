import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TestPageRootState } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/store";
import {
    fetchTodos,
    ITodo,
} from "src/touchers/state-management/redux-toolkit/TestPage/api/fetchTodos";
import { addTodo } from "src/touchers/state-management/redux-toolkit/TestPage/api/addTodo";
import { toggleTodoCompleted } from "src/touchers/state-management/redux-toolkit/TestPage/api/toggleTodoCompleted";

interface ITodosInitialState {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
}

const initialState: ITodosInitialState = {
    todos: [],
    loading: false,
    error: null,
};

const handlerPending = (state: ITodosInitialState) => {
    state.loading = true;
};

const handlerReject = (state: ITodosInitialState, action: any) => {
    state.loading = false;
    state.error = String(action.payload);
};

// async actions
export const fetchTodosAction = createAsyncThunk(
    "Todos/fetchTodos",
    async (_, { rejectWithValue }) => {
        try {
            return fetchTodos();
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);
export const addTodoAction = createAsyncThunk(
    "Todos/addTodo",
    async (value: string, { rejectWithValue, dispatch }) => {
        try {
            await addTodo(value);

            dispatch(fetchTodosAction());
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const toggleTodoCompletedAction = createAsyncThunk(
    "Todos/toggleTodoCompleted",
    async ({ completed, id }: ITodo, { rejectWithValue, dispatch }) => {
        try {
            await toggleTodoCompleted(id, !completed);

            dispatch(fetchTodosAction());
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

// slice
const TodoListSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTodosAction.pending, handlerPending)
            .addCase(fetchTodosAction.rejected, handlerReject)
            .addCase(addTodoAction.pending, handlerPending)
            .addCase(addTodoAction.rejected, handlerReject)
            .addCase(toggleTodoCompletedAction.pending, handlerPending)
            .addCase(toggleTodoCompletedAction.rejected, handlerReject)
            .addCase(fetchTodosAction.fulfilled, (state, action) => {
                if (state.error) state.error = null;
                state.loading = false;
                state.todos = action.payload;
            });
    },
});

// sync actions
export const { clearError } = TodoListSlice.actions;

// reducer
export const TodoListReducer = TodoListSlice.reducer;

// selectors
export const selectTodos = (state: TestPageRootState) => state.TodoList.todos;
export const selectLoadingStatus = (state: TestPageRootState) =>
    state.TodoList.loading;
export const selectErrorStatus = (state: TestPageRootState) =>
    state.TodoList.error;