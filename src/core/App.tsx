import * as React from "react";
import { TestPage } from "src/features/state-management/redux-toolkit/TestPage/TestPage";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    return <TestPage />;
};

export { App };
