// @flow

import { api } from 'src/utils';
import { actions } from './index';

const Questions = {
    FETCH_QUESTIONS: 'FETCH_QUESTIONS',
    REFRESH_QUESTIONS: 'REFRESH_QUESTIONS',
    reset: () => {
        return function (dispatch): any {
            dispatch({
                type: Answers.RESET_ANSWERS,
            });
            dispatch({
                type: actions.Questions.FETCH_QUESTIONS,
            });
            return api.fetchQuestions().then((questions) => {
                dispatch({
                    type: actions.Questions.REFRESH_QUESTIONS,
                    questions,
                });
            });
        };
    },
};

const Answers = {
    SUBMIT_ANSWER: 'SUBMIT_ANSWER',
    RESET_ANSWERS: 'RESET_ANSWERS',
    submit: (questionId: number, userAnswer: boolean, questionCount: number) => {
        return function (dispatch): any {
            dispatch({
                type: Answers.SUBMIT_ANSWER,
                answer: {
                    questionId,
                    userAnswer,
                },
                questionCount,
            });
        };
    },
    reset: () => {
        return function (dispatch): any {
            dispatch({
                type: Answers.RESET_ANSWERS,
            });
        };
    },
};

export {
    Questions,
    Answers,
};
