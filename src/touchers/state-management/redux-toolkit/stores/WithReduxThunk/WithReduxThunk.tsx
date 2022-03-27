import * as React from "react";
import { useAppDispatch } from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/hooks/useAppDispatch";
import { useAppSelector } from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/hooks/useAppSelector";
import {
    addTodoThunkAction,
    clearError,
    deleteTodoThunkAction,
    fetchTodosThunkAction,
    selectErrorStatus,
    selectLoadingStatus,
    selectTodos,
    toggleTodoCompletedThunkAction,
} from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/slices/TodoListSlice";
import { useEffect } from "react";
import { TodoAppLayout } from "src/touchers/state-management/redux-toolkit/components/TodoAppLayout";
import { ITodoItem } from "src/touchers/state-management/redux-toolkit/common";

interface IWithReduxThunkProps {}

const WithReduxThunk: React.FC<IWithReduxThunkProps> = () => {
    const dispatch = useAppDispatch();

    const todos = useAppSelector(selectTodos);
    const loading = useAppSelector(selectLoadingStatus);
    const error = useAppSelector(selectErrorStatus);

    const deleteHandler = (todo: ITodoItem) => {
        dispatch(deleteTodoThunkAction(todo.id));
    };
    const addHandler = (newWordValue: string) => {
        dispatch(addTodoThunkAction(newWordValue));
    };
    const onErrorClose = () => {
        dispatch(clearError());
    };
    const toggleCheckboxHandler = (todo: ITodoItem) => {
        dispatch(toggleTodoCompletedThunkAction(todo));
    };

    useEffect(() => {
        dispatch(fetchTodosThunkAction());
    }, [dispatch]);

    return (
        <TodoAppLayout
            loading={loading}
            error={error}
            todos={todos}
            onAdd={addHandler}
            onCloseError={onErrorClose}
            onDelete={deleteHandler}
            onToggleCheckbox={toggleCheckboxHandler}
        />
    );
};

export { WithReduxThunk };
