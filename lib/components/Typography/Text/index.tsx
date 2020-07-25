import React from 'react';
import { TextSize } from 'components/Typography/types';
import { IDefaultTypographyProps } from 'components/Typography';

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
  const { size = 'medium', ...rest } = props;
  return <></>;
};

export default Text;
