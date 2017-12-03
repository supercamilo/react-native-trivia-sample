// @flow

import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { reducers, actions } from 'src/redux';
import { persistReducer, purgeStoredState, persistStore } from 'redux-persist/src';
import { initialState } from 'src/redux/state';
import thunk from 'redux-thunk';
import { api } from 'src/utils';
import type { Store, Question } from 'src/redux/state';

class StoreProvider {
    static init = (config: any): Store => {
        const persistConfig = {
            key: 'trivia',
            storage: AsyncStorage,
        };

        if (config.store.purge) {
            purgeStoredState(persistConfig);
        }

        const mainReducer = persistReducer(
            persistConfig,
            reducers,
        );

        const middleware = applyMiddleware(thunk);

        const store = createStore(mainReducer, initialState, middleware);
        const persistor = StoreProvider.restore(store);
        return [store, persistor];
    };

    static restore(store: Store): any {
        // Try to restore questions from local storage
        return persistStore(store, {});
    }

    static async serverSync(store: Store): Promise<Array<Question>> {
        const state = store.getState();
        if (!state.questions.items || state.questions.items.length < 1) {
            // Call the server when no questions on the storage
            store.dispatch({
                type: actions.Questions.FETCH_QUESTIONS,
            });
            return api.fetchQuestions().then((questions) => {
                store.dispatch({
                    type: actions.Questions.REFRESH_QUESTIONS,
                    questions,
                });
            });
        }
        return true;
    }
}

export default StoreProvider;
