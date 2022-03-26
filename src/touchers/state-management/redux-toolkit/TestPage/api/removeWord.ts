const removeWord = () => {
    return new Promise<{ success: boolean }>((resolve) =>
        setTimeout(() => resolve({ success: true }), 500)
    );
};

export { removeWord };
