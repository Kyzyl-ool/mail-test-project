import React from 'react';
import { TextSize } from 'components/Typography/types';
import { IDefaultTypographyProps } from 'components/Typography';
import { makeClassNames } from '../../../utils/makeObjectFromArray';
import classNames from 'classnames';
import './index.scss';

/**
 * Text – главный компонент для обычного текста.
 * Для заголовков см. компоент Typography.Title
 */
interface IText extends IDefaultTypographyProps {
  /**
   * Задает размер текста.
   * По умолчанию 'medium'
   */
  size?: TextSize;
}

const Text: React.FC<IText> = props => {
  const { className, size = 'medium', children, color = 'primary', ...rest } = props;

  const modifiers = [size, color];

  const classes = classNames(className, makeClassNames('ux-text', modifiers));

  return (
    <span {...rest} className={classes}>
      {children}
    </span>
  );
};

export default Text;
