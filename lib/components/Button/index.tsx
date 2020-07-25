import React, { ButtonHTMLAttributes } from 'react';
import { ButtonSizeType, ButtonTypeType } from 'components/Button/types';
import classNames from 'classnames';
import './index.scss';
import { makeClassNames } from '../../utils/makeObjectFromArray';

/**
 * Button (UI без кнопок – не UI)
 */
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Задает стиль кнопки.
   * По умолчанию 'default'
   */
  buttonType?: ButtonTypeType;

  /**
   * Задает размер кнопки.
   * По умолчанию 'small'
   */
  uxSize?: ButtonSizeType;

  /**
   * Если true, заполняет все доступное пространство
   * Реализован как width: 100%, height: 100%
   */
  fillAvailable?: boolean;
}

export const Button: React.FC<IButton> = props => {
  const { uxSize = 'small', buttonType = 'default', children, fillAvailable, ...rest } = props;

  const modifiers = [uxSize, buttonType];

  const classes = classNames(props.className, {
    ...makeClassNames('ux-button', modifiers),
    ['ux-button_fill-available']: fillAvailable
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
