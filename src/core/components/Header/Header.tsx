import * as React from "react";
import { Box } from "@mui/material";

interface IHeaderProps {
    type?: HeaderTypes;
}

export enum HeaderTypes {
    "page",
    "secondary",
}

const Header: React.FC<IHeaderProps> = ({
    children,
    type = HeaderTypes.secondary,
}) => {
    if (type === HeaderTypes.page) {
        return (
            <Box sx={{ p: "10px" }}>
                <h1>{children}</h1>
            </Box>
        );
    } else if (type === HeaderTypes.secondary) {
        return (
            <Box>
                <h3>{children}</h3>
            </Box>
        );
    }

    return null;
};

export { Header };
