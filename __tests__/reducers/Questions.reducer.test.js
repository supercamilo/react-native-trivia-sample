// @flow

import * as reducers from '../../src/redux/reducers';
import { initialState } from '../../src/redux/state';
import * as actions from '../../src/redux/actions';
import { questions } from '../setup';

describe('Questions reducer', () => {
    it('returns the initial state', () => {
        expect(reducers.questions(undefined, {})).toEqual(initialState.questions);
    });

    it('handles FETCH_QUESTIONS', () => {
        const action = { type: actions.Questions.FETCH_QUESTIONS };
        const expectedState = { isFetching: true, items: initialState.questions.items };
        expect(reducers.questions(initialState.questions, action)).toEqual(expectedState);
    });

    it('handles REFRESH_QUESTIONS', () => {
        const action = { type: actions.Questions.REFRESH_QUESTIONS, questions };
        const expectedState = { isFetching: false, items: questions };
        expect(reducers.questions(initialState.questions, action)).toEqual(expectedState);
    });
});
