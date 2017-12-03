// @flow

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import FetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import type { RootState } from '../src/redux/state';
import * as selectors from '../src/redux/selectors';
import { Store as StoreInterface } from '../src/redux/state';

Enzyme.configure({ adapter: new Adapter() });

Date.now = jest.fn(() => new Date(Date.UTC(2017, 12, 2, 0, 0, 0, 0)).valueOf());
jest.unmock('ScrollView');
// init mocks
FetchMock.mock('*', { placeholder: '' });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const dummyState: RootState = {
    questions: {
        isFetching: false,
        items: [
            {
                id: 0,
                category: 'Entertainment: Video Games',
                question: 'In &quot;The Sims&quot; series, the most members in a household you can have is 8.',
                correctAnswer: true,
            },
            {
                id: 1,
                category: 'History',
                question: 'Japan was part of the Allied Powers during World War I.',
                correctAnswer: true,
            },
        ],
    },
    answers: {
        items: [
            {
                questionId: 0,
                userAnswer: false,
            },
            {
                questionId: 1,
                userAnswer: true,
            },
        ],
    },
    nav: {},
};

function getNewStore(): StoreInterface {
    return mockStore(dummyState);
}

const Store = mockStore(dummyState);
const questions = dummyState.questions.items;
const answers = dummyState.answers.items;
const results = selectors.getResults(dummyState);

const successfulResponse = {
    status: 200,
    body: {},
    headers: { 'Content-Type': 'application/json' },
};

const questionsBody = {
    response_code: 0,
    results: [
        {
            category: 'Entertainment: Video Games',
            type: 'boolean',
            difficulty: 'hard',
            question: 'In &quot;The Sims&quot; series, the most members in a household you can have is 8.',
            correct_answer: 'True',
            incorrect_answers: [
                'False',
            ],
        },
        {
            category: 'History',
            type: 'boolean',
            difficulty: 'hard',
            question: 'Japan was part of the Allied Powers during World War I.',
            correct_answer: 'True',
            incorrect_answers: [
                'False',
            ],
        },
    ],
};

export {
    Store,
    getNewStore,
    questions,
    answers,
    results,
    successfulResponse,
    questionsBody,
};
