import * as React from "react";
import { IWord } from "src/touchers/state-management/redux-toolkit/TestPage/api/fetchWords";

interface IWordsContainerProps {
    words: IWord[];
}

const WordsContainer: React.FC<IWordsContainerProps> = ({ words }) => {
    return (
        <div>
            {words.map((word) => {
                return <div>{word.value}</div>;
            })}
        </div>
    );
};

export { WordsContainer };
