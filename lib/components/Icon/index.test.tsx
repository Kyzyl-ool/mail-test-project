import React from 'react';
import { renderWithoutCrash } from 'testing/shortcuts';
import Icon from 'components/Icon/index';

describe('Icon component', () => {
  it('should render without crash', renderWithoutCrash(<Icon iconName={'trash-icon'} />));
});
