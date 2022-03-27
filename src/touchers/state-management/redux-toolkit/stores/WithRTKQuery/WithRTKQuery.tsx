import * as React from "react";
import { useFetchTodosQuery } from "src/touchers/state-management/redux-toolkit/stores/WithRTKQuery/todoListApi/todoListApi";
import { TodoAppLayout } from "src/touchers/state-management/redux-toolkit/components/TodoAppLayout";

interface IWithRTKQueryProps {}

const WithRTKQuery: React.FC<IWithRTKQueryProps> = () => {
    const { data = [], isLoading, error, refetch } = useFetchTodosQuery();

    console.log("ыть", error);

    return (
        <TodoAppLayout
            todos={data}
            error={error ? `Ошибка ${JSON.stringify(error)}` : null}
            loading={isLoading}
            onCloseError={() => {
                refetch();
            }}
            onDelete={() => {}}
            onToggleCheckbox={() => {}}
            onAdd={() => {}}
        />
    );
};

export { WithRTKQuery };
