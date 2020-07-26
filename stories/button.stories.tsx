import React from 'react';
import { Button } from 'components/Button';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const Default = () => (
  <Button
    buttonType={select('Button type', ['secondary', 'default'], 'secondary')}
    disabled={boolean('Disabled', false)}
    uxSize={select('Size', ['small', 'medium', 'large'], 'medium')}
    fillAvailable={boolean('Fill available', false)}
  >
    Нажми на меня
  </Button>
);
