import * as React from "react";
import { Box } from "@mui/material";

interface ITestPageHeaderProps {}

const PageHeader: React.FC<ITestPageHeaderProps> = ({ children }) => {
    return (
        <Box sx={{ p: "10px" }}>
            <h1>{children}</h1>
        </Box>
    );
};

export { PageHeader };
