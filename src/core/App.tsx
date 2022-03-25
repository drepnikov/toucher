import * as React from "react";
import { TestPage } from "src/features/state-management/redux-toolkit/TestPage/TestPage";
import css from "./App.module.scss";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    return (
        <div className={css.appPageContainer}>
            <TestPage />
        </div>
    );
};

export { App };
