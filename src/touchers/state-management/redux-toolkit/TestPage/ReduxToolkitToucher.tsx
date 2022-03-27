import * as React from "react";
import { WithReduxThunk } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithReduxThunk/WithReduxThunk";
import { WithReduxThunkStore } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithReduxThunk/store";
import { Provider } from "react-redux";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { PageHeader } from "src/core/components/PageHeader/PageHeader";

enum TabsEnum {
    withReduxThunk,
    withRTKQuery,
    OnlyLocalState,
}

interface IReduxToolkitToucherProps {}

const ReduxToolkitToucher: React.FC<IReduxToolkitToucherProps> = () => {
    const [currentTab, setCurrentTab] = useState(TabsEnum.withReduxThunk);

    return (
        <div>
            <div>
                <PageHeader>Трогаем redux-toolkit</PageHeader>
            </div>
            <Tabs
                sx={{ mb: "30px" }}
                value={currentTab}
                onChange={(_, val) => {
                    setCurrentTab(val);
                }}
            >
                <Tab
                    label="Серверное состояние (redux-thunk)"
                    value={TabsEnum.withReduxThunk}
                />
                <Tab
                    label="Серверное состояние (rtk-query)"
                    value={TabsEnum.withRTKQuery}
                />
                <Tab
                    label="Локальное состояние"
                    value={TabsEnum.OnlyLocalState}
                />
            </Tabs>
            {currentTab === TabsEnum.withReduxThunk && (
                <Provider store={WithReduxThunkStore}>
                    <WithReduxThunk />
                </Provider>
            )}
        </div>
    );
};

export { ReduxToolkitToucher };
