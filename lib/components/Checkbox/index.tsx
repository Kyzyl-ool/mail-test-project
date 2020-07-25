import React, { InputHTMLAttributes } from 'react';
import { CheckBoxStyleType } from 'components/Checkbox/types';

/**
 * Checkbox – чекбокс (кэп)
 */
interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Задает стиль
   */
  uxType: CheckBoxStyleType;
}

export const Checkbox: React.FC<ICheckbox> = props => {
  return <></>;
};
