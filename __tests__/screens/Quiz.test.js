// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../../src/screens';
import { Store } from '../setup';

describe('renders the Quiz screen correctly', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Quiz store={Store} />);
    });

    it('renders the Quiz container', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the Quiz elements', () => {
        expect(wrapper.dive()).toMatchSnapshot();
    });
});

