/** @flow */

import React from 'react';
import { StoreProvider } from 'src/redux';
import { Root as RootContainer, StyleProvider } from 'native-base';
import { Splash } from 'src/screens';
import { Provider } from 'react-redux';
import { ConnectedNavigator } from 'src/navigation';
import { Theme } from 'src/styles';
import { PersistGate } from 'redux-persist/src/integration/react';
import config from '../config/default.json';

const [store, persistor] = StoreProvider.init(config);

const Root = function (): React$Element<Provider> {
    return (
        <Provider store={store}>
            <StyleProvider style={Theme.getTheme(Theme.variables)}>
                <PersistGate
                    loading={<Splash />}
                    persistor={persistor}
                    onBeforeLift={() => StoreProvider.serverSync(store)}
                >
                    <RootContainer>
                        <ConnectedNavigator />
                    </RootContainer>
                </PersistGate>
            </StyleProvider>
        </Provider>
    );
};

export default Root;
