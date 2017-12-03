// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Results } from '../../src/screens';
import { Store } from '../setup';

describe('renders the Results screen correctly', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Results store={Store} />);
    });

    it('renders the Results container', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the Results elements', () => {
        expect(wrapper.dive()).toMatchSnapshot();
    });
});

