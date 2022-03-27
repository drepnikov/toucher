import * as React from "react";

import { BottomNav } from "src/core/components/BottomNavigation/BottomNav";
import { Container, Paper } from "@mui/material";
import { ReduxToolkitToucher } from "src/touchers/state-management/redux-toolkit/ReduxToolkitToucher";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    return (
        <Paper sx={{ m: "20px", minHeight: "90vh" }} elevation={5}>
            <Container maxWidth={"xl"}>
                <ReduxToolkitToucher />
                <BottomNav currentValue={"Test Pages"} />
            </Container>
        </Paper>
    );
};

export { App };
