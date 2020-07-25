import React, { ButtonHTMLAttributes } from 'react';
import { ButtonTypeType } from 'components/Button/types';

/**
 * Button (UI без кнопок – не UI)
 */
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Задает стиль кнопки.
   */
  buttonType: ButtonTypeType;
}

export const Button: React.FC<IButton> = props => {
  return <></>;
};
