import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";

export enum BottomNavItemsEnum {
    Touchers,
}

interface IBottomNavProps {
    currentValue: string;
}

const BottomNav: React.FC<IBottomNavProps> = () => {
    const [currentPage, setCurrentPage] = useState(BottomNavItemsEnum.Touchers);

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
                    value={BottomNavItemsEnum.Touchers}
                    label={"Touchers"}
                    icon={<RemoveRedEyeIcon />}
                />
            </BottomNavigation>
        </Paper>
    );
};

export { BottomNav };
