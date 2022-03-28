import * as React from "react";
import { Box } from "@mui/material";

interface IVideochatProps {}

const AudioAndVideo: React.FC<IVideochatProps> = () => {
    return (
        <Box sx={{ pt: "10px" }}>
            <p>
                <h3>Просто тег видео:</h3>
            </p>
            <p>
                <video
                    src={"https://2ch.hk/b/src/265636675/16484714773930.webm"}
                    controls={true}
                />
            </p>
            <p>
                <h3>Захват с камеры:</h3>
            </p>
            <p></p>
        </Box>
    );
};

export { AudioAndVideo };
