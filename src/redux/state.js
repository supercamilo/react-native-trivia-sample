// @flow

type Question = {
    id: number,
    category: string,
    question: string,
    correctAnswer: boolean,
};

type Answer = {
    questionId: number,
    userAnswer: boolean,
};

type Result = {
    question: string,
    correctAnswer: boolean,
    userAnswer: boolean,
    answerIsCorrect: boolean,
};

type RootState = {
    questions: {
       isFetching: boolean,
       items: Array<Question>,
    },
    answers: {
        items: Array<Answer>,
    }
};

const initialState: RootState = {
    questions: {
        isFetching: false,
        items: [],
    },
    answers: {
        items: [],
    },
};

export {
    initialState,
};

export type {
    Question,
    Answer,
    Result,
    RootState,
};

export interface Store {
    dispatch({type: string}): void,
    getState(): any,
}
