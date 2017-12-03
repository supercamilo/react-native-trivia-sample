// @flow

import { NavigationActions } from 'react-navigation';
import { Routes, getNavigationAction, getStateForAction } from 'src/navigation';
import { combineReducers } from 'redux';
import * as actions from 'src/redux/actions';
import { initialState } from 'src/redux/state';
import type { Question, Answer, RootState } from 'src/redux/state';

const initialNavState = getStateForAction(NavigationActions.init()); // force and init for nested navigators

const navigatorReducer = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case actions.Answers.RESET_ANSWERS: {
            const resetAction = getNavigationAction(Routes.Home, undefined, true);
            nextState = getStateForAction(resetAction, initialNavState);
            break;
        }
        case actions.Answers.SUBMIT_ANSWER: {
            // Use index as the id for ease of use with this sample.
            // This should be handled with something like UUID on a real app and have some extra logic to get the next question
            // A SortedMap would be a candidate
            const nextId = action.answer.questionId + 1;
            let navAction;
            if (nextId < action.questionCount) {
                navAction = getNavigationAction(Routes.Quiz, { questionId: nextId });
            } else {
                navAction = getNavigationAction(Routes.Results);
            }

            nextState = getStateForAction(navAction, state);
            break;
        }
        default: {
            nextState = getStateForAction(action, state);
            break;
        }
    }

    return nextState;
};


const initialQuestionsState = initialState.questions;

const questionsReducer = (state: RootState.questions = initialQuestionsState, action: object): Array<Question> => {
    let nextState : ?Array<Question>;

    switch (action.type) {
        case actions.Questions.FETCH_QUESTIONS:
            nextState = { ...state, isFetching: true };
            break;
        case actions.Questions.REFRESH_QUESTIONS:
            nextState = { ...state, items: action.questions, isFetching: false };
            break;
        default:
    }

    return nextState || state;
};

const initialAnswersState = initialState.answers;

const answersReducer = (state: RootState.answers = initialAnswersState, action: Object): Array<Question> => {
    let nextState : ?Array<Answer>;

    switch (action.type) {
        case actions.Answers.RESET_ANSWERS:
            nextState = { ...state, items: [] };
            break;
        case actions.Answers.SUBMIT_ANSWER: {
            let answers = state.items;
            const idx = answers.findIndex(function (a): Number { return a.questionId === action.answer.questionId; });

            if (idx !== -1) {
                answers[idx] = { ...answers[idx], userAnswer: action.answer.userAnswer };
            } else {
                answers = answers.concat(action.answer);
            }

            nextState = { ...state, items: answers };
            break;
        }
        default:
    }

    return nextState || state;
};

const reducers = combineReducers({
    nav: navigatorReducer,
    questions: questionsReducer,
    answers: answersReducer,
});

export {
    navigatorReducer as navigator,
    questionsReducer as questions,
    answersReducer as answers,
};

export default reducers;
