import React from 'react';
import { Checkbox } from 'components/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox
};

export const Default = () => <Checkbox uxType={'default'} />;
export const Labeled = () => <Checkbox uxType={'default'}>Подпись</Checkbox>;
