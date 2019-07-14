import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ErrorBoundary from '../src/errors/ErrorBoundary';

const spy = sinon.spy();

describe('ErrorBoundary', () => {
  const Something = () => null;
  const wrapper = shallow(
    <ErrorBoundary spy={spy}>
      <Something />
    </ErrorBoundary>,
  );
  test('should display an ErrorMessage if wrapped component throws', () => {
    const error = new Error('test');
    wrapper.find(Something).simulateError(error);
    expect(wrapper.state()).toHaveProperty('hasError', true);
  });
});
