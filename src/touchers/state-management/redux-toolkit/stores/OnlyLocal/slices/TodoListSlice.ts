import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    ITodoItem,
    todoListInitialSlice,
} from "src/touchers/state-management/redux-toolkit/common";
import { OnlyLocalRootState } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/store";

const TodoListSlice = createSlice({
    name: "TodosLocal",
    initialState: todoListInitialSlice,
    reducers: {
        addTodoLocal: (store, action: PayloadAction<string>) => {
            store.todos.push({
                value: action.payload,
                id: Date.now(),
                completed: false,
            });
        },
        deleteTodoLocal: (store, action: PayloadAction<number>) => {
            store.todos = store.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        toggleTodoCompletedLocal: (store, action: PayloadAction<ITodoItem>) => {
            const targetTodo = store.todos.find((todo) => {
                return todo.id === action.payload.id;
            });

            if (targetTodo) targetTodo.completed = !targetTodo.completed;
        },
    },
});

export const { deleteTodoLocal, addTodoLocal, toggleTodoCompletedLocal } =
    TodoListSlice.actions;
export const TodoListReducer = TodoListSlice.reducer;

// selectors
export const selectTodos = (state: OnlyLocalRootState) => state.TodoList.todos;
