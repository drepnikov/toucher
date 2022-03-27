const deleteTodo = async (id: number) => {
    const result = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
    });

    if (!result.ok) throw new Error("Ошибка запроса");

    return result.json();
};

export { deleteTodo };
