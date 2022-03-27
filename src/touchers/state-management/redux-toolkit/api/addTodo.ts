import { ITodo } from "src/touchers/state-management/redux-toolkit/api/fetchTodos";

const addTodo = async (value: string): Promise<ITodo> => {
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
