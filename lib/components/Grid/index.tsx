import React, { HTMLAttributes } from 'react';
import Col from './Col';
import Row from './Row';

/**
 * Grid – сетка с разделением столбцов на 24 равных части.
 */

type IGrid = HTMLAttributes<HTMLDivElement>;

const List: React.FC<IGrid> = props => {
  return <></>;
};

export default List;

export { Row, Col };
