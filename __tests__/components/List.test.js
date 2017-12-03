// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { List, ResultItem } from '../../src/components';
import { results } from '../setup';

it('renders the List component correctly', () => {
    const wrapper = shallow(<List
        list={results}
        renderItem={(item) =>
            <ResultItem result={item.item} />
        }
    />);
    expect(wrapper).toMatchSnapshot();
});
