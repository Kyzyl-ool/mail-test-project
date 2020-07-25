import React, { HTMLAttributes } from 'react';
import { NumbersFrom0To24 } from 'components/Grid/types';
import classNames from 'classnames';
import { makeClassNames } from '../../../utils/makeObjectFromArray';
import './index.scss';

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
  const { children, span, className, ...rest } = props;

  const classes = classNames(className, makeClassNames('ux-col', []));

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Col;
