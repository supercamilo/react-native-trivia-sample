// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { ResultItem } from '../../src/components';
import { results } from '../setup';

it('renders the ResultItem component correctly', () => {
    const wrapper = shallow(<ResultItem result={results[0]} />);
    expect(wrapper).toMatchSnapshot();
});
