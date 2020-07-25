import React from 'react';
import { NumbersFrom1To24 } from 'components/Grid/types';

/**
 * Col - столбец сетки
 */
interface IGridCol {
  /**
   * Задает кол-во позиций, которых должен занимать этот столбец
   */
  span: NumbersFrom1To24;
}

const Col: React.FC<IGridCol> = props => {
  return <></>;
};

export default Col;
