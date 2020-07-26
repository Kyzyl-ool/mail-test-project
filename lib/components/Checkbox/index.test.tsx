import React from 'react';
import { renderWithoutCrash } from 'testing/shortcuts';
import { Checkbox } from 'components/Checkbox/index';

describe('Checkbox component', () => {
  it('should render without crash', renderWithoutCrash(<Checkbox />));
});
