import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Develop from "@mui/icons-material/Construction";
import { useState } from "react";

export enum BottomNavItemsEnum {
    TestPages,
    About,
}

interface IBottomNavProps {
    currentValue: string;
}

const BottomNav: React.FC<IBottomNavProps> = () => {
    const [currentPage, setCurrentPage] = useState(
        BottomNavItemsEnum.TestPages
    );

    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
            }}
            elevation={3}
        >
            <BottomNavigation
                onChange={(_, newValue) => setCurrentPage(newValue)}
                value={currentPage}
                showLabels
            >
                <BottomNavigationAction
                    value={BottomNavItemsEnum.TestPages}
                    label={"Test Pages"}
                    icon={<RemoveRedEyeIcon />}
                />
                <BottomNavigationAction
                    value={BottomNavItemsEnum.About}
                    label={"About"}
                    icon={<Develop />}
                />
            </BottomNavigation>
        </Paper>
    );
};

export { BottomNav };
