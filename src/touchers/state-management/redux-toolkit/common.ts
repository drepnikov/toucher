export interface ITodoItem {
    value: string;
    id: number;
    completed: boolean;
}

export interface ITodoListState {
    todos: ITodoItem[];
    loading: boolean;
    error: null | string;
}

export const todoListInitialSlice: ITodoListState = {
    todos: [],
    loading: false,
    error: null,
};
