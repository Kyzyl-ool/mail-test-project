import React from 'react';
import { NumbersFrom0To24 } from 'components/Grid/types';
import './index.scss';

/**
 * Row – строка сетки.
 * По умолчанию занимает все доступное пространство.
 * В children должны быть только элементы Col.
 */
interface IGridRow {
  /**
   * Задает отступ вправо на заданное кол-во позиций offset.
   */
  offset?: NumbersFrom0To24;
}

const makeComponent = (child: React.ReactElement, flexString: string): React.ReactNode => {
  return React.cloneElement(child, {
    ...child.props,
    style: {
      flex: flexString
    }
  });
};

const Row: React.FC<IGridRow> = props => {
  const { children, offset = 0, ...rest } = props;

  const spanSum = React.Children.map<number, React.ReactNode>(
    children,
    (child: React.ReactElement) => child.props.span
  ).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return (
    <div className={'ux-row'}>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child: React.ReactElement) => {
        return makeComponent(
          child,
          spanSum < 24 ? `0 0 ${(child.props.span / 24) * 100}%` : `${child.props.span / spanSum} 0 auto`
        );
      })}
    </div>
  );
};

export default Row;
