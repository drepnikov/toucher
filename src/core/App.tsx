import * as React from "react";
import { TestPage } from "src/features/state-management/redux-toolkit/TestPage/TestPage";
import css from "./App.module.scss";
import { TestPageStore } from "src/features/state-management/redux-toolkit/TestPage/store/store";
import { Provider } from "react-redux";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    return (
        <div className={css.appPageContainer}>
            <Provider store={TestPageStore}>
                <TestPage />
            </Provider>
        </div>
    );
};

export { App };
