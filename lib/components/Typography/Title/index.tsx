import React from 'react';
import { TitleLevel } from 'components/Typography/types';
import { IDefaultTypographyProps } from 'components/Typography';
import { makeClassNames } from '../../../utils/makeObjectFromArray';
import classNames from 'classnames';
import './index.scss';

/**
 * Title – компонент для заголовков.
 */
interface ITitle extends IDefaultTypographyProps {
  /**
   * Задает уровень заголовка
   */
  level?: TitleLevel;
}

const mapLevelToElementName = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
};

const Title: React.FC<ITitle> = props => {
  const { color = 'black', level = 2, children, className, ...rest } = props;

  const modifiers = [color];

  const classes = classNames(className, makeClassNames('ux-title', modifiers));

  return React.createElement(
    mapLevelToElementName[level],
    {
      ...rest,
      className: classes
    },
    children
  );
};

export default Title;
