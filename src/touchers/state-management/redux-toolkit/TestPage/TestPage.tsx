import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useAppSelector } from "src/touchers/state-management/redux-toolkit/TestPage/store/hooks/useAppSelector";
import {
    addWordToDictionary,
    removeWordFromDictionary,
    selectWords,
} from "src/touchers/state-management/redux-toolkit/TestPage/store/slices/Words/wordsSlice";
import { WordsContainer } from "src/touchers/state-management/redux-toolkit/TestPage/components/WordsCointainer/WordsContainer";
import css from "./TestPage.module.css";
import { useState } from "react";
import { useTestPageDispatch } from "src/touchers/state-management/redux-toolkit/TestPage/store/hooks/useAppDispatch";
import { PageHeader } from "src/core/components/PageHeader/PageHeader";

interface ITestPageProps {}

const TestPage: React.FC<ITestPageProps> = () => {
    const words = useAppSelector(selectWords);
    const dispatch = useTestPageDispatch();

    const [addWordValue, setAddWordValue] = useState("");
    const [addWordValueAsync, setAddWordValueAsync] = useState("");
    const [removeWordValue, setRemoveWordValue] = useState("");
    const [removeWordValueAsync, setRemoveWordValueAsync] = useState("");

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
                            className={css.inputFieldContainer}
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
                                                addWordToDictionary(
                                                    addWordValue
                                                )
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
                            className={css.inputFieldContainer}
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
                                                removeWordFromDictionary(
                                                    removeWordValue
                                                )
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
