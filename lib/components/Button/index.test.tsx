import React from 'react';
import { Button } from 'components/Button';
import { renderWithoutCrash } from 'testing/shortcuts';

describe('Button component', () => {
  it('should render without crash', renderWithoutCrash(<Button />));
});
