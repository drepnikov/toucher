import * as React from "react";
import { TestPage } from "src/features/state-management/redux-toolkit/TestPage/TestPage";
import { TestPageStore } from "src/features/state-management/redux-toolkit/TestPage/store/store";
import { Provider } from "react-redux";
import { BottomNav } from "src/features/ui/mui/BottomNavigation/BottomNav";
import { Container, Paper } from "@mui/material";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    return (
        <Paper sx={{ m: "20px", minHeight: "90vh" }} elevation={5}>
            <Container maxWidth={"xl"}>
                <Provider store={TestPageStore}>
                    <TestPage />
                </Provider>
                <BottomNav currentValue={"Test Pages"} />
            </Container>
        </Paper>
    );
};

export { App };
