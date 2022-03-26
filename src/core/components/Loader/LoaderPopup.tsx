import * as React from "react";
import { CircularProgress, Dialog, DialogTitle } from "@mui/material";

interface ILoaderPopupProps {
    open: boolean;
}

const LoaderPopup: React.FC<ILoaderPopupProps> = ({ open }) => {
    return (
        <Dialog open={open}>
            <DialogTitle sx={{ px: 20 }}>Загрузка</DialogTitle>
            <CircularProgress
                sx={{
                    my: 5,
                    mx: "auto",
                }}
                size={60}
            />
        </Dialog>
    );
};

export { LoaderPopup };
