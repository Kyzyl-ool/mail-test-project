import React, { OlHTMLAttributes } from 'react';

/**
 * Item – элемент списка.
 * Рекомендуется использовать только как прямой потомок List.
 */
type IListItem = OlHTMLAttributes<HTMLOListElement>;

const Item: React.FC<IListItem> = props => {
  return <></>;
};

export default Item;
