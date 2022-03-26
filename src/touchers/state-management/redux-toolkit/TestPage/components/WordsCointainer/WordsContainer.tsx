import * as React from "react";

interface IWordsContainerProps {
    words: string[];
}

const WordsContainer: React.FC<IWordsContainerProps> = ({ words }) => {
    return (
        <div>
            {words.map((word) => {
                return <div>{word}</div>;
            })}
        </div>
    );
};

export { WordsContainer };
