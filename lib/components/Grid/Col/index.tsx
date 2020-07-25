import React, { HTMLAttributes } from 'react';
import { NumbersFrom0To24 } from 'components/Grid/types';

/**
 * Col - столбец сетки
 */
export interface IGridCol extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Задает кол-во позиций, которое должен занимать этот столбец
   */
  span: NumbersFrom0To24;
}

const Col: React.FC<IGridCol> = props => {
  const { children, span, ...rest } = props;

  return <span {...rest}>{children}</span>;
};

export default Col;
