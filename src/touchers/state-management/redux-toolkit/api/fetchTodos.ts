export interface ITodo {
    value: string;
    id: number;
    completed: boolean;
}

const fetchTodos = async (): Promise<ITodo[]> => {
    const result = await fetch("http://localhost:3001/todos");

    if (!result.ok) throw new Error("Ошибка запроса");

    return result.json();
};

export { fetchTodos };
