import React, { LiHTMLAttributes } from 'react';
import Item from './Item';

/**
 * List – список.
 *
 * Элементы списка необходимо обенуть в List.Item и прокинуть в children
 */
interface IList extends LiHTMLAttributes<HTMLLIElement> {
  /**
   * Отступ между элементами списка (в пикселях)
   */
  gap: number;
}

const List: React.FC<IList> = props => {
  return <></>;
};

export default List;

export { Item };
