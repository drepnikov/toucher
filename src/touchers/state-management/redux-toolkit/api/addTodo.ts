import { ITodoItem } from "src/touchers/state-management/redux-toolkit/common";

const addTodo = async (value: string): Promise<ITodoItem> => {
    const result = await fetch("http://localhost:3001/todos", {
        method: "POST",
        body: JSON.stringify({ value, completed: false }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!result.ok) throw new Error("Ошибка запроса");

    return result.json();
};

export { addTodo };
