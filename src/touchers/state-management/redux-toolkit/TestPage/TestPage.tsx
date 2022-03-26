import * as React from "react";
import {
    Button,
    Grid,
    TextField,
    Dialog,
    DialogTitle,
    CircularProgress,
} from "@mui/material";
import {
    addWordToDictionarySync,
    fetchWordsAsync,
    removeWordFromDictionarySync,
    selectLoadingStatus,
    selectWords,
} from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/slices/Words/wordsSlice";
import { WordsContainer } from "src/touchers/state-management/redux-toolkit/TestPage/components/WordsCointainer/WordsContainer";
import { useEffect, useState } from "react";
import { PageHeader } from "src/core/components/PageHeader/PageHeader";
import { useTestPageDispatch } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/hooks/useAppDispatch";
import { useAppSelector } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/hooks/useAppSelector";

interface ITestPageProps {}

const TestPage: React.FC<ITestPageProps> = () => {
    const dispatch = useTestPageDispatch();
    const words = useAppSelector(selectWords);
    const loading = useAppSelector(selectLoadingStatus);

    const [addWordValue, setAddWordValue] = useState("");
    const [addWordValueAsync, setAddWordValueAsync] = useState("");
    const [removeWordValue, setRemoveWordValue] = useState("");
    const [removeWordValueAsync, setRemoveWordValueAsync] = useState("");

    useEffect(() => {
        dispatch(fetchWordsAsync());
    }, [dispatch]);

    if (loading) {
        return (
            <Dialog open={true}>
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
    }

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <PageHeader>Трогаем redux-toolkit</PageHeader>
            </Grid>
            <Grid item>
                <div>
                    <h3>Избранные слова</h3>
                    <WordsContainer words={words} />
                </div>
            </Grid>
            <Grid item>
                <Grid container columnSpacing={5}>
                    <Grid item>
                        <h3>Добавить слово</h3>
                        <Grid
                            container
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                        >
                            <Grid item>
                                <TextField
                                    value={addWordValue}
                                    onChange={(e) =>
                                        setAddWordValue(e.target.value)
                                    }
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!addWordValue.length}
                                        onClick={() => {
                                            dispatch(
                                                addWordToDictionarySync({
                                                    id: Date.now(),
                                                    value: addWordValue,
                                                })
                                            );

                                            setAddWordValue("");
                                        }}
                                    >
                                        Добавить
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item>или</Grid>
                            <Grid item>
                                <TextField
                                    value={addWordValueAsync}
                                    onChange={(e) =>
                                        setAddWordValueAsync(e.target.value)
                                    }
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!addWordValueAsync.length}
                                    >
                                        Добавить (асинхронно)
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h3>Удалить слово</h3>
                        <Grid
                            container
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                        >
                            <Grid item>
                                <TextField
                                    value={removeWordValue}
                                    onChange={(e) =>
                                        setRemoveWordValue(e.target.value)
                                    }
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!removeWordValue.length}
                                        onClick={() => {
                                            dispatch(
                                                removeWordFromDictionarySync({
                                                    id: Date.now(),
                                                    value: removeWordValue,
                                                })
                                            );

                                            setRemoveWordValue("");
                                        }}
                                    >
                                        Удалить
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item>или</Grid>
                            <Grid item>
                                <TextField
                                    value={removeWordValueAsync}
                                    onChange={(e) =>
                                        setRemoveWordValueAsync(e.target.value)
                                    }
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!removeWordValueAsync.length}
                                    >
                                        Удалить (асинхронно)
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { TestPage };
