import * as React from "react";
import { useAppDispatch } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithReduxThunk/hooks/useAppDispatch";
import { useAppSelector } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithReduxThunk/hooks/useAppSelector";
import {
    addTodoAction,
    clearError,
    deleteTodoAction,
    fetchTodosAction,
    selectErrorStatus,
    selectLoadingStatus,
    selectTodos,
    toggleTodoCompletedAction,
} from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithReduxThunk/slices/TodoListSlice";
import { useEffect, useState } from "react";
import { LoaderPopup } from "src/core/components/Loader/LoaderPopup";
import { ErrorPopup } from "src/core/components/ErrorPopup/ErrorPopup";
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IWithReduxThunkProps {}

const WithReduxThunk: React.FC<IWithReduxThunkProps> = () => {
    const dispatch = useAppDispatch();

    const todos = useAppSelector(selectTodos);
    const loading = useAppSelector(selectLoadingStatus);
    const error = useAppSelector(selectErrorStatus);

    const [newWordValue, setNewWordValue] = useState("");

    useEffect(() => {
        dispatch(fetchTodosAction());
    }, [dispatch]);

    return (
        <div>
            <LoaderPopup open={loading} />
            <ErrorPopup
                open={Boolean(error)}
                message={error}
                onClose={() => {
                    dispatch(clearError());
                }}
            />

            <div>
                <List sx={{ width: "700px" }}>
                    {todos.map((todo) => {
                        return (
                            <ListItem
                                key={todo.id}
                                sx={{ p: 0 }}
                                secondaryAction={
                                    <IconButton
                                        onClick={() => {
                                            dispatch(deleteTodoAction(todo.id));
                                        }}
                                        edge="end"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={todo.completed}
                                            onChange={() => {
                                                dispatch(
                                                    toggleTodoCompletedAction(
                                                        todo
                                                    )
                                                );
                                            }}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={todo.value} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}

                    <Box sx={{ pl: "15px" }}>
                        <TextField
                            type={"text"}
                            variant={"standard"}
                            value={newWordValue}
                            onChange={(e) => {
                                setNewWordValue(e.target.value);
                            }}
                        />{" "}
                        <Button
                            disabled={!newWordValue.length}
                            onClick={() => {
                                dispatch(addTodoAction(newWordValue));

                                setNewWordValue("");
                            }}
                        >
                            Добавить задание
                        </Button>
                    </Box>
                </List>
            </div>
        </div>
    );
};

export { WithReduxThunk };
