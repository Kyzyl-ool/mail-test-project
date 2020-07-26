import React from 'react';
import { Avatar } from 'components/Avatar';
import { renderWithoutCrash } from 'testing/shortcuts';

describe('Avatar component', () => {
  it('should render without crash', renderWithoutCrash(<Avatar />));

  it('should pass correct size props', function() {
    ['small', 'medium', 'large'].forEach(value => {
      renderWithoutCrash(<Avatar size={value} />)();
    });
  });
});
