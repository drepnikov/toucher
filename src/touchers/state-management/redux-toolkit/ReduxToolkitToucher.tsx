import * as React from "react";
import { WithReduxThunk } from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/WithReduxThunk";
import { WithReduxThunkStore } from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/store";
import { Provider } from "react-redux";
import { Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";
import { Header } from "src/core/components/Header/Header";
import { OnlyLocalStore } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/store";
import { OnlyLocal } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/OnlyLocal";
import { WithRTKQuery } from "src/touchers/state-management/redux-toolkit/stores/WithRTKQuery/WithRTKQuery";
import { WithRTKQueryStore } from "src/touchers/state-management/redux-toolkit/stores/WithRTKQuery/store";
import { HeaderTypes } from "src/core/components/Header/Header";

enum TabsEnum {
    withReduxThunk,
    withRTKQuery,
    onlyLocal,
}

interface IReduxToolkitToucherProps {}

const ReduxToolkitToucher: React.FC<IReduxToolkitToucherProps> = () => {
    const [currentTab, setCurrentTab] = useState(TabsEnum.withRTKQuery);
    const changeTabHandler = useCallback((_: any, val: TabsEnum) => {
        setCurrentTab(val);
    }, []);

    return (
        <div>
            <div>
                <Header type={HeaderTypes.page}>Трогаем redux-toolkit</Header>
            </div>
            <Tabs
                sx={{ mb: "30px" }}
                value={currentTab}
                onChange={changeTabHandler}
            >
                <Tab
                    label="Серверное состояние (redux-thunk)"
                    value={TabsEnum.withReduxThunk}
                />
                <Tab label="Локальное состояние" value={TabsEnum.onlyLocal} />
                <Tab
                    label="Серверное состояние (rtk-query)"
                    value={TabsEnum.withRTKQuery}
                />
            </Tabs>

            {currentTab === TabsEnum.withReduxThunk && (
                <Provider store={WithReduxThunkStore}>
                    <WithReduxThunk />
                </Provider>
            )}

            {currentTab === TabsEnum.onlyLocal && (
                <Provider store={OnlyLocalStore}>
                    <OnlyLocal />
                </Provider>
            )}

            {currentTab === TabsEnum.withRTKQuery && (
                <Provider store={WithRTKQueryStore}>
                    <WithRTKQuery />
                </Provider>
            )}
        </div>
    );
};

export { ReduxToolkitToucher };
