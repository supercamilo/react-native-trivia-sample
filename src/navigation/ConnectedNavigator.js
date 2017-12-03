// @flow

import React from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Colors } from 'src/styles';
import {
    Home,
    Quiz,
    Results,
    Splash,
} from 'src/screens';

const Routes = {
    get Home(): string { return 'Home'; },
    get Quiz(): string { return 'Quiz'; },
    get Results(): string { return 'Results'; },
};
type RoutesType = $Keys<typeof Routes>;

const NavigatorConfig = {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Home',
};

const RouteConfigs = {
    Home: {
        screen: Home,
    },
    Quiz: {
        screen: Quiz,
    },
    Results: {
        screen: Results,
    },
};

const MainNavigator = StackNavigator(RouteConfigs, NavigatorConfig);

const mapStateToProps = (state) => (
    {
        nav: state.nav,
        isFetchingQuestions: state.questions.isFetching,
    }
);

class AppWithNavigationState extends React.Component<{ nav: Object, isFetchingQuestions: boolean, dispatch: () => any }> {
    componentWillMount() {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor(Colors.transparent);
        StatusBar.setBarStyle('dark-content');
    }

    getNavigationHelpers = () => {
        const { dispatch, nav } = this.props;
        return addNavigationHelpers({ dispatch, state: nav });
    };

    render(): React$Element<any> {
        const { isFetchingQuestions } = this.props;
        if (isFetchingQuestions) {
            return <Splash />;
        }
        return <MainNavigator navigation={this.getNavigationHelpers()} />;
    }
}

const ConnectedNavigator = connect(mapStateToProps)(AppWithNavigationState);

const { getStateForAction } = MainNavigator.router;

export {
    MainNavigator,
    getStateForAction,
    Routes,
};

export type {
    RoutesType,
};

export default ConnectedNavigator;
