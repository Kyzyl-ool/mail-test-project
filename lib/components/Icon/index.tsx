import React from 'react';
import { IconSize } from 'components/Icon/types';

/**
 * Icon – иконки.
 * Берет картинку из src и помещает в контейнер заданного размера
 */
interface IIcon {
  /**
   * Размер иконки
   */
  size: IconSize;

  /**
   * Откуда брать картинку / иконку
   */
  src: string;

  /**
   * Задает закругление
   */
  rounded?: boolean;
}

export const Icon: React.FC<IIcon> = props => {
  return <></>;
};
