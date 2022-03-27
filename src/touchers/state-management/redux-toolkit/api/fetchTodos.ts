import { ITodoItem } from "src/touchers/state-management/redux-toolkit/common";

const fetchTodos = async (): Promise<ITodoItem[]> => {
    const result = await fetch("http://localhost:3001/todos");

    if (!result.ok) throw new Error("Ошибка запроса");

    return result.json();
};

export { fetchTodos };
