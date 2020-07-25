import React from 'react';
import App from './App';
import { renderWithoutCrash } from './testing/shortcuts';

describe('App component', () => {
  it('should render without crash', renderWithoutCrash(<App />));
});
