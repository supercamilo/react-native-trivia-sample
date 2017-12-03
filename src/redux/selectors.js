// @flow

import { createSelector } from 'reselect';
import type { RootState, Question, Answer, Result } from 'src/redux/state';

const getQuestions = (state: RootState) => state.questions.items;
const getAnswers = (state: RootState) => state.answers.items;

const getResults: (state: RootState) => Array<Result> = createSelector(
    getQuestions,
    getAnswers,
    (questions: Array<Question>, answers: Array<Answer>) => {
        const results = questions.map(function (question): Array<Result> {
            const answer = answers.find((a) => a.questionId === question.id);
            return {
                id: question.id,
                question: question.question,
                correctAnswer: question.correctAnswer,
                userAnswer: answer && answer.userAnswer,
                answerIsCorrect: question.correctAnswer === (answer && answer.userAnswer),
            };
        });

        return results;
    },
);

export {
    getResults,
};
