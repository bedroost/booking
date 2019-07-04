import React from 'react';
import { shallow } from 'enzyme';
import Add from '../src/App';

describe('<Comment /> rendering', () => {
  it('should render one <h1>', () => {
    const wrapper = shallow(<Add />);
    expect(wrapper.children('h1')).toHaveLength(0);
  });
});
