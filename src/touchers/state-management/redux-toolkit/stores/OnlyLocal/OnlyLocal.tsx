import * as React from "react";
import { useAppDispatch } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/hooks/useAppDispatch";
import { useAppSelector } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/hooks/useAppSelector";
import {
    addTodoLocal,
    deleteTodoLocal,
    selectTodos,
    toggleTodoCompletedLocal,
} from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/slices/TodoListSlice";
import { TodoAppLayout } from "src/touchers/state-management/redux-toolkit/components/TodoAppLayout";
import { ITodoItem } from "src/touchers/state-management/redux-toolkit/common";

interface IOnlyLocalProps {}

const OnlyLocal: React.FC<IOnlyLocalProps> = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodos);

    const deleteHandler = (todo: ITodoItem) => {
        dispatch(deleteTodoLocal(todo.id));
    };
    const addHandler = (newWordValue: string) => {
        dispatch(addTodoLocal(newWordValue));
    };
    const toggleCheckboxHandler = (todo: ITodoItem) => {
        dispatch(toggleTodoCompletedLocal(todo));
    };

    return (
        <TodoAppLayout
            todos={todos}
            error={null}
            loading={false}
            onCloseError={() => {}}
            onDelete={deleteHandler}
            onAdd={addHandler}
            onToggleCheckbox={toggleCheckboxHandler}
        />
    );
};

export { OnlyLocal };
