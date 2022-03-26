import * as React from "react";
import {
    Box,
    Button,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PageHeader } from "src/core/components/PageHeader/PageHeader";
import { useTestPageDispatch } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/hooks/useAppDispatch";
import { useAppSelector } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/hooks/useAppSelector";
import {
    addTodoAction,
    clearError,
    fetchTodosAction,
    selectErrorStatus,
    selectLoadingStatus,
    selectTodos,
    toggleTodoCompletedAction,
} from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/slices/TodoListSlice";
import { LoaderPopup } from "src/core/components/Loader/LoaderPopup";
import { ErrorPopup } from "src/core/components/ErrorPopup/ErrorPopup";

interface ITestPageProps {}

const TestPage: React.FC<ITestPageProps> = () => {
    const dispatch = useTestPageDispatch();

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
                <PageHeader>Трогаем redux-toolkit</PageHeader>
            </div>
            <div>
                <List sx={{ width: "700px" }}>
                    {todos.map((todo) => {
                        return (
                            <ListItem
                                key={todo.id}
                                sx={{ p: 0 }}
                                // secondaryAction={
                                //     <IconButton edge="end">
                                //         <EditIcon />
                                //     </IconButton>
                                // }
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
                            Добавить слово
                        </Button>
                    </Box>
                </List>
            </div>
        </div>
    );
};

export { TestPage };
