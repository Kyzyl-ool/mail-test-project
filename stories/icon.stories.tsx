import React from 'react';
import { Icon } from 'components/Icon';

export default {
  title: 'Icon',
  component: Icon
};

export const DifferentSizes = () => (
  <>
    <Icon size={'small'} iconName={'trash-icon'} />
    <Icon size={'medium'} iconName={'trash-icon'} />
    <Icon size={'large'} iconName={'trash-icon'} />
  </>
);
