import React, { HTMLAttributes } from 'react';
import { IconNames, IconSize } from 'components/Icon/types';
import classNames from 'classnames';
import { makeClassNames } from '../../utils/makeObjectFromArray';
import './index.scss';

/**
 * Icon – иконки.
 * Берет картинку из src и помещает в контейнер заданного размера
 */
export interface IIcon extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Размер иконки
   */
  size?: IconSize;

  /**
   * Имя иконки
   */
  iconName: IconNames;

  /**
   * Задаёт закругление
   */
  rounded?: boolean;
}

export const Icon: React.FC<IIcon> = props => {
  const { className, size = 'medium', iconName, rounded, ...rest } = props;
  const classes = classNames(className, {
    ...makeClassNames(`ux-${iconName}`, [size]),
    [`ux-${iconName}_rounded`]: rounded
  });

  return (
    <div {...rest} className={classes}>
      <span className={`ux-${iconName}__icon`} />
    </div>
  );
};

export default Icon;
