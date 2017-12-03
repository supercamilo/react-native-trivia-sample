// @flow

import ConnectedNavigator, { Routes, getStateForAction } from 'src/navigation/ConnectedNavigator';
import { navigateTo, getNavigationAction } from 'src/navigation/utils';
import type { RoutesType } from 'src/navigation/ConnectedNavigator';

export {
    ConnectedNavigator,
    getStateForAction,
    Routes,
    navigateTo,
    getNavigationAction,
};

export type {
    RoutesType,
};
