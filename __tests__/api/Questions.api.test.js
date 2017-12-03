// @flow

import FetchMock from 'fetch-mock';
import config from '../../config/default.json';
import { api } from '../../src/utils';
import { successfulResponse, questionsBody } from '../setup';

beforeEach(FetchMock.restore);

it('fetches Questions correctly', async () => {
    FetchMock.get(
        config.API.base_url,
        {
            ...successfulResponse,
            body: questionsBody,
        },
    );

    const results = await api.fetchQuestions();
    expect(results).toBeDefined();
    expect(Array.isArray(results)).toBeTruthy();
    expect(results.length).toEqual(2);
});
