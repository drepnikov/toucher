import { Button, Container, Dialog, DialogTitle } from "@mui/material";
import * as React from "react";
import { useCallback } from "react";

interface IErrorPopupProps {
    open: boolean;
    onClose?: () => void;
    message?: string | null;
}

const ErrorPopup: React.FC<IErrorPopupProps> = ({ onClose, message, open }) => {
    const onCloseHandler = useCallback(() => {
        onClose && onClose();
    }, [onClose]);

    return (
        <Dialog open={open}>
            <DialogTitle sx={{ px: 20 }}>Ошибка</DialogTitle>
            <Container sx={{ textAlign: "center", pb: "15px" }}>
                {message}
            </Container>
            <Button onClick={onCloseHandler}>OK</Button>
        </Dialog>
    );
};

export { ErrorPopup };
