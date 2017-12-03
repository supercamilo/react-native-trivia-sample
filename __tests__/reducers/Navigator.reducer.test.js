// @flow

import * as reducers from '../../src/redux/reducers';
import * as actions from '../../src/redux/actions';
import { answers } from '../setup';

describe('Navigator reducer', () => {
    it('returns the initial state', () => {
        const navState = reducers.navigator(undefined, {});
        expect(navState.routes[navState.index].routeName).toEqual('Home');
    });

    it('handles RESET_ANSWERS', () => {
        const action = { type: actions.Answers.RESET_ANSWERS };
        const navState = reducers.navigator(undefined, action);
        expect(navState.routes[navState.index].routeName).toEqual('Home');
    });

    it('handles SUBMIT_ANSWER for next Question', () => {
        const action = { type: actions.Answers.SUBMIT_ANSWER, answer: answers[0], questionCount: 2 };
        const navState = reducers.navigator(undefined, action);
        expect(navState.routes[navState.index].routeName).toEqual('Quiz');
        expect(navState.routes[navState.index].params.questionId).toEqual(1);
    });

    it('handles SUBMIT_ANSWER for last Question', () => {
        const action = { type: actions.Answers.SUBMIT_ANSWER, answer: answers[1], questionCount: 2 };
        const navState = reducers.navigator(undefined, action);
        expect(navState.routes[navState.index].routeName).toEqual('Results');
    });
});
