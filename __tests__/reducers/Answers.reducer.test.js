// @flow

import * as reducers from '../../src/redux/reducers';
import { initialState } from '../../src/redux/state';
import * as actions from '../../src/redux/actions';
import { answers } from '../setup';

describe('Answers reducer', () => {
    it('returns the initial state', () => {
        expect(reducers.answers(undefined, {})).toEqual(initialState.answers);
    });

    it('handles RESET_ANSWERS', () => {
        const action = { type: actions.Answers.RESET_ANSWERS };
        const initState = { items: answers };
        const expectedState = { items: [] };
        expect(reducers.answers(initState, action)).toEqual(expectedState);
    });

    it('handles SUBMIT_ANSWER', () => {
        const action = { type: actions.Answers.SUBMIT_ANSWER, answer: answers[1], questionCount: 2 };
        const initState = { items: [answers[0]] };
        const expectedState = { items: answers };
        expect(reducers.answers(initState, action)).toEqual(expectedState);
    });
});
