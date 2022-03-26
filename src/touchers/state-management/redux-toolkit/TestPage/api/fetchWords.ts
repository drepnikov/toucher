export interface IWord {
    value: string;
    id: number;
}

export interface IWords {
    items: IWord[];
}

const fetchWords = async (): Promise<IWords> => {
    const result = await fetch("http://localhost:3001/words");

    return result.json();
};

export { fetchWords };
