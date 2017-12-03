// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../src/screens';
import { Store } from '../setup';

describe('renders the Home screen correctly', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Home store={Store} />);
    });

    it('renders the Home container', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the Home elements', () => {
        expect(wrapper.dive()).toMatchSnapshot();
    });
});

