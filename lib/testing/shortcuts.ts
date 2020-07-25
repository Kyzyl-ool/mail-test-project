import { shallow } from 'enzyme';
import React from 'react';

export const renderWithoutCrash = (node: React.ReactElement) => {
  return (): void => {
    const wrapper = shallow(node);
    expect(() => wrapper.render()).not.toThrowError();
  };
};
