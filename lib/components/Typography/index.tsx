import { TypographyColor } from 'components/Typography/types';
import Text from './Text';
import Title from './Title';
import { HTMLAttributes } from 'react';

export interface IDefaultTypographyProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Цвет типографики.
   * !!! По умолчанию 'primary' для Text, 'black' для Title !!!
   */
  color?: TypographyColor;
}

export default { Text, Title };
