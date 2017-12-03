// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { QuestionBox } from '../../src/components';
import { questions } from '../setup';

it('renders the QuestionBox component correctly', () => {
    const wrapper = shallow(<QuestionBox question={questions[0]} />);
    expect(wrapper).toMatchSnapshot();
});
