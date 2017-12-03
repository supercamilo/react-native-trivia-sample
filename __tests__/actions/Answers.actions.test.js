// @flow

import * as actions from '../../src/redux/actions';
import { answers, questions, getNewStore } from '../setup';

describe('Answer actions', () => {
    let Store;
    beforeEach(() => {
        Store = getNewStore();
    });

    it('creates an action to Submit an Answer', async () => {
        console.log(questions.length);
        const expectedAction = [{ type: actions.Answers.SUBMIT_ANSWER, answer: answers[0], questionCount: questions.length }];

        await Store.dispatch(actions.Answers.submit(answers[0].questionId, answers[0].userAnswer, questions.length));
        expect(Store.getActions()).toEqual(expectedAction);
    });

    it('creates an action to Reset Answers', async () => {
        const expectedAction = [{ type: actions.Answers.RESET_ANSWERS }];

        await Store.dispatch(actions.Answers.reset());
        expect(Store.getActions()).toEqual(expectedAction);
    });
});
