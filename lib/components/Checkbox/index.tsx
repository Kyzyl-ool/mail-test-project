import React, { InputHTMLAttributes } from 'react';
import { CheckBoxStyleType } from 'components/Checkbox/types';
import classNames from 'classnames';
import { makeClassNames } from '../../utils/makeObjectFromArray';
import './index.scss';
import { useId } from 'react-id-generator';
import Typography from 'components/Typography';

const { Text, Title } = Typography;

/**
 * Checkbox – чекбокс (кэп)
 */
interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Задает стиль
   * По умолчанию 'default'
   */
  uxType?: CheckBoxStyleType;
}

export const Checkbox: React.FC<ICheckbox> = props => {
  const { uxType = 'default', className, children, ...rest } = props;
  const [htmlId] = useId();

  const modifiers = [uxType];

  const classes = classNames(className, makeClassNames('ux-checkbox', modifiers));

  return (
    <>
      <input id={htmlId} type="checkbox" className={classes} {...rest} />
      <label htmlFor={htmlId}>
        <Text>{children}</Text>
      </label>
    </>
  );
};
