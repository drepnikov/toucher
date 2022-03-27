import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WithReduxThunkRootState } from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/store";
import {
    fetchTodos,
    ITodo,
} from "src/touchers/state-management/redux-toolkit/api/fetchTodos";
import { addTodo } from "src/touchers/state-management/redux-toolkit/api/addTodo";
import { toggleTodoCompleted } from "src/touchers/state-management/redux-toolkit/api/toggleTodoCompleted";
import { deleteTodo } from "src/touchers/state-management/redux-toolkit/api/deleteTodo";

interface ITodosState {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
}

const initialState: ITodosState = {
    todos: [],
    loading: false,
    error: null,
};

const handlerPending = (state: ITodosState) => {
    state.loading = true;
};

const handlerReject = (state: ITodosState, action: any) => {
    state.loading = false;
    state.error = String(action.payload);
};

// async actions
export const fetchTodosThunkAction = createAsyncThunk(
    "Todos/fetchTodos",
    async (_, { rejectWithValue }) => {
        try {
            return fetchTodos();
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);
export const addTodoThunkAction = createAsyncThunk(
    "Todos/addTodo",
    async (value: string, { rejectWithValue, dispatch }) => {
        try {
            await addTodo(value);

            dispatch(fetchTodosThunkAction());
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const toggleTodoCompletedThunkAction = createAsyncThunk(
    "Todos/toggleTodoCompleted",
    async ({ completed, id }: ITodo, { rejectWithValue, dispatch }) => {
        try {
            await toggleTodoCompleted(id, !completed);

            dispatch(fetchTodosThunkAction());
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const deleteTodoThunkAction = createAsyncThunk(
    "Todos/deleteTodo",
    async (id: number, { rejectWithValue, dispatch }) => {
        try {
            await deleteTodo(id);

            dispatch(fetchTodosThunkAction());
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
            .addCase(fetchTodosThunkAction.pending, handlerPending)
            .addCase(fetchTodosThunkAction.rejected, handlerReject)
            .addCase(addTodoThunkAction.pending, handlerPending)
            .addCase(addTodoThunkAction.rejected, handlerReject)
            .addCase(deleteTodoThunkAction.pending, handlerPending)
            .addCase(deleteTodoThunkAction.rejected, handlerReject)
            .addCase(toggleTodoCompletedThunkAction.pending, handlerPending)
            .addCase(toggleTodoCompletedThunkAction.rejected, handlerReject)
            .addCase(fetchTodosThunkAction.fulfilled, (state, action) => {
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
export const selectTodos = (state: WithReduxThunkRootState) =>
    state.TodoList.todos;
export const selectLoadingStatus = (state: WithReduxThunkRootState) =>
    state.TodoList.loading;
export const selectErrorStatus = (state: WithReduxThunkRootState) =>
    state.TodoList.error;
