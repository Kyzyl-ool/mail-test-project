import React from 'react';
import { TitleLevel } from 'components/Typography/types';
import { IDefaultTypographyProps } from 'components/Typography';

/**
 * Title – компонент для заголовков.
 */
interface ITitle extends IDefaultTypographyProps {
  /**
   * Задает уровень заголовка
   */
  level: TitleLevel;
}

const Title: React.FC<ITitle> = props => {
  return <></>;
};

export default Title;
