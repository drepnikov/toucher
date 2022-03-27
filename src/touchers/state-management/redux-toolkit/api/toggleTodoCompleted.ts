const toggleTodoCompleted = async (id: number, completed: boolean) => {
    const result = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!result.ok) throw new Error("Ошибка запроса");

    return result.json();
};

export { toggleTodoCompleted };
