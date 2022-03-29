import * as React from "react";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { Header } from "src/core/components/Header/Header";

interface IVideochatProps {}

const AudioAndVideo: React.FC<IVideochatProps> = () => {
    useEffect(() => {
        console.log(navigator);
    }, []);

    return (
        <Box sx={{ pt: "10px" }}>
            <Header>Просто тег видео:</Header>

            <p>
                <video
                    src={"https://2ch.hk/b/src/265636675/16484714773930.webm"}
                    controls={true}
                />
            </p>

            <Header>Захват с камеры:</Header>
        </Box>
    );
};

export { AudioAndVideo };
