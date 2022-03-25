import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useAppSelector } from "src/features/state-management/redux-toolkit/store/hooks/useAppSelector";
import { selectWords } from "src/features/state-management/redux-toolkit/store/slices/Words/wordsSlice";
import { WordsContainer } from "src/features/state-management/redux-toolkit/TestPage/components/WordsCointainer/WordsContainer";
import css from "./TestPage.module.css";
import { useState } from "react";

interface ITestPageProps {}

const TestPage: React.FC<ITestPageProps> = () => {
    const words = useAppSelector(selectWords);

    const [addWord, setAddWord] = useState("");
    const [addWordAsync, setAddWordAsync] = useState("");
    const [removeWord, setRemoveWord] = useState("");
    const [removeWordAsync, setRemoveWordAsync] = useState("");

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <h1>Трогаем redux-toolkit</h1>
            </Grid>
            <Grid item>
                <div>
                    <h3>Избранные слова</h3>
                    <WordsContainer words={words} />
                </div>
            </Grid>
            <Grid item>
                <Grid container spacing={5}>
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
                                    value={addWord}
                                    onChange={(e) => setAddWord(e.target.value)}
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!addWord.length}
                                    >
                                        Добавить
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item>или</Grid>
                            <Grid item>
                                <TextField
                                    value={addWordAsync}
                                    onChange={(e) =>
                                        setAddWordAsync(e.target.value)
                                    }
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!addWordAsync.length}
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
                                    value={removeWord}
                                    onChange={(e) =>
                                        setRemoveWord(e.target.value)
                                    }
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!removeWord.length}
                                    >
                                        Удалить
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item>или</Grid>
                            <Grid item>
                                <TextField
                                    value={removeWordAsync}
                                    onChange={(e) =>
                                        setRemoveWordAsync(e.target.value)
                                    }
                                    type={"text"}
                                    variant={"standard"}
                                />
                                <div>
                                    <Button
                                        size={"small"}
                                        disabled={!removeWordAsync.length}
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
