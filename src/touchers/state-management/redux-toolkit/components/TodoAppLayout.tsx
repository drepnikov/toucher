import * as React from "react";
import { useState } from "react";
import { LoaderPopup } from "src/core/components/Loader/LoaderPopup";
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
import { ErrorPopup } from "src/core/components/ErrorPopup/ErrorPopup";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodoItem } from "src/touchers/state-management/redux-toolkit/common";

interface ITodoAppLayoutProps {
    todos: ITodoItem[];
    error: string | null;
    loading: boolean;
    onCloseError(): void;
    onDelete(todo: ITodoItem): void;
    onToggleCheckbox(todo: ITodoItem): void;
    onAdd(newWordValue: string): void;
}

const TodoAppLayout: React.FC<ITodoAppLayoutProps> = ({
    todos,
    onDelete,
    error,
    loading,
    onCloseError,
    onToggleCheckbox,
    onAdd,
}) => {
    const [newWordValue, setNewWordValue] = useState("");

    return (
        <div>
            <LoaderPopup open={loading} />
            <ErrorPopup
                open={Boolean(error)}
                message={error}
                onClose={onCloseError}
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
                                            onDelete(todo);
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
                                                onToggleCheckbox(todo);
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
                                onAdd(newWordValue);

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

export { TodoAppLayout };
