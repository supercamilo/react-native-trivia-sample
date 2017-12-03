// @flow

import FetchMock from 'fetch-mock';
import * as actions from '../../src/redux/actions';
import { questions, questionsBody, Store, successfulResponse } from '../setup';
import config from '../../config/default.json';

beforeEach(FetchMock.restore);

it('creates an action to Reset Questions', async () => {
    FetchMock.get(
        config.API.base_url,
        {
            ...successfulResponse,
            body: questionsBody,
        },
    );

    const expectedActions = [
        { type: actions.Answers.RESET_ANSWERS },
        { type: actions.Questions.FETCH_QUESTIONS },
        { type: actions.Questions.REFRESH_QUESTIONS, questions },
    ];

    await Store.dispatch(actions.Questions.reset());
    expect(Store.getActions()).toEqual(expectedActions);
});
