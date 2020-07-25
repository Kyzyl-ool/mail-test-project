import React, { HTMLAttributes } from 'react';
import './index.scss';
import { makeClassNames } from '../../../utils/makeObjectFromArray';
import classNames from 'classnames';

/**
 * Row – строка сетки.
 * По умолчанию занимает все доступное пространство.
 * В children должны быть только элементы Col.
 */
interface IGridRow extends HTMLAttributes<HTMLDivElement> {
  /**
   * Задает отступ между столбцами Col в этой строке (в пикселях).
   * Достигается это через inline-стиль margin-left
   */
  gap?: number;
}

const makeComponent = (child: React.ReactElement, flexString: string, gap: number): React.ReactNode => {
  return React.cloneElement(child, {
    ...child.props,
    style: {
      ...child.props.style,
      flex: flexString,
      marginLeft: `${gap}px`
    }
  });
};

const Row: React.FC<IGridRow> = props => {
  const { children, gap = 0, className, ...rest } = props;

  const spanSum = React.Children.map<number, React.ReactNode>(
    children,
    (child: React.ReactElement) => child.props.span
  ).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const classes = classNames(className, makeClassNames('ux-row', []));

  return (
    <div {...rest} className={classes}>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child: React.ReactElement, index) => {
        return makeComponent(
          child,
          // spanSum < 24 ? `0 0 ${(child.props.span / 24) * 100}%` : `${child.props.span / spanSum} 0 auto`,
          `0 0 ${(child.props.span / 24) * 100}%`,
          index > 0 ? gap : 0
        );
      })}
    </div>
  );
};

export default Row;
