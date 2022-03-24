import * as React from "react";
import { Grid } from "@mui/material";
import { useAppSelector } from "src/features/state-management/redux-toolkit/store/hooks/useAppSelector";
import { selectWords } from "src/features/state-management/redux-toolkit/store/slices/Words/wordsSlice";

interface ITestPageProps {}

const TestPage: React.FC<ITestPageProps> = () => {
    const words = useAppSelector(selectWords);
    console.log(words);
    return (
        <Grid container direction={"column"}>
            <Grid item>{words}</Grid>
        </Grid>
    );
};

export { TestPage };
