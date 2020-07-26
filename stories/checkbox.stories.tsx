import React from 'react';
import { Checkbox } from 'components/Checkbox';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs]
};

export const Default = () => (
  <Checkbox checked={boolean('Checked', false)} uxType={select('Checkbox type', ['default', 'secondary'], 'default')}>
    Подпись
  </Checkbox>
);
