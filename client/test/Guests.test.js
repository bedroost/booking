import React from 'react';
import { Provider } from 'react-redux';

import { shallow } from 'enzyme';
import store from '../src/store';
import GuestsContainer from '../src/containers';

describe('is connected guest component rendered', () => {
  it('should render guests', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <GuestsContainer />
      </Provider>,
    );
    // console.log(wrapper.debug());
    // console.log(wrapper.dive().debug());
    // console.log(wrapper.dive().props());
    expect(wrapper.find('Connect(Guests)')).toHaveLength(1);
  });
});
