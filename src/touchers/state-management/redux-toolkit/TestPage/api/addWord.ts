const addWord = () => {
    return new Promise<{ success: boolean }>((resolve) =>
        setTimeout(() => resolve({ success: true }), 500)
    );
};

export { addWord };
