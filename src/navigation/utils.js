// @flow

import { NavigationActions } from 'react-navigation';

const getNavigationAction = (routeName: string, routeParams?: Object, reset?: boolean = false): Object => {
    const routes = routeName.split('/');

    let action = NavigationActions.navigate({ routeName: routes[0], params: routeParams });
    routes.shift();
    routes.reduce((parentAction, route) => {
        const params = routes[routes.length - 1] === route ? routeParams : undefined;
        const childAction = NavigationActions.navigate({ routeName: route, params });
        // eslint-disable-next-line no-param-reassign, no-return-assign
        return parentAction.action = childAction;
    }, action);

    if (reset) {
        action = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                action,
            ],
        });
    }

    return action;
};

const navigateTo = (navigation: Object, routeName: string, params?: Object): void => {
    navigation.dispatch(getNavigationAction(routeName, params));
};

export {
    navigateTo,
    getNavigationAction,
};
