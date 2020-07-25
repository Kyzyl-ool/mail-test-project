import React from 'react';
import { NumbersFrom1To24 } from 'components/Grid/types';

/**
 * Row – строка сетки.
 * По умолчанию занимает все доступное пространство.
 */
interface IGridRow {
  /**
   * Задает отступ вправо на заданное кол-во позиций offset.
   */
  offset: NumbersFrom1To24;
}

const Row: React.FC<IGridRow> = props => {
  return <></>;
};

export default Row;
