import * as React from "react";
import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Header } from "src/core/components/Header/Header";

interface IVideochatProps {}

const AudioAndVideo: React.FC<IVideochatProps> = () => {
    const cameraRef = useRef<HTMLVideoElement>(null);
    const [cameraNotFound, setCameraNotFound] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: 300,
                },
            })
            .then((stream) => {
                if (cameraRef.current) {
                    cameraRef.current.srcObject = stream;
                    cameraRef.current.play();
                }
            })
            .catch((e) => {
                setCameraNotFound(true);
            });
    };

    return (
        <Box sx={{ pt: "10px" }}>
            <Header>Просто тег видео:</Header>

            <Box>
                <video
                    src={"https://2ch.hk/b/src/265636675/16484714773930.webm"}
                    controls={true}
                />
            </Box>

            <Header>Захват с камеры:</Header>

            <Box>
                <Button onClick={() => getVideo()}>Включить камеру</Button>

                {cameraNotFound && <p>Камера не обнаружена</p>}

                <Box>
                    <video ref={cameraRef} controls={true} />
                </Box>
            </Box>
        </Box>
    );
};

export { AudioAndVideo };
