import React from 'react';
import { renderWithoutCrash } from 'testing/shortcuts';
import App from './App';

describe('App component', () => {
  it('should render without crash', renderWithoutCrash(<App />));
});
