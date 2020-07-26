import React from 'react';
import { renderWithoutCrash } from 'testing/shortcuts';
import Typography from 'components/Typography';

const { Text, Title } = Typography;

describe('Text component', () => {
  it('should render without crash', renderWithoutCrash(<Text />));
});

describe('Title component', () => {
  it('should render without crash', renderWithoutCrash(<Title />));
});
