import React, { HTMLAttributes, ImgHTMLAttributes } from 'react';
import { AvatarSizeType } from 'components/Avatar/types';
import classNames from 'classnames';
import { makeClassNames } from '../../utils/makeObjectFromArray';
import './index.scss';

/**
 * Avatar – компонент для отрисовки аватарки
 */
interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Ссылка на картинку с аватаркой. Если src не прокинут, будет отображена заглушка
   */
  src?: string;

  /**
   * Размер аватарки
   */
  size?: AvatarSizeType;

  /**
   * Закругление аватарки
   */
  rounded?: boolean;
}

const AVATAR_THUMBNAIL = 'https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg';

export const Avatar: React.FC<IAvatar> = props => {
  const { src, size = 'medium', className, rounded = false, alt, ...rest } = props;

  const classes = classNames(className, {
    ...makeClassNames('ux-avatar', [size]),
    ['ux-avatar_rounded']: rounded
  });

  return <img alt={alt} src={src || AVATAR_THUMBNAIL} className={classes} {...rest} />;
};
