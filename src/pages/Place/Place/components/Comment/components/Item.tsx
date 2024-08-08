import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import cx from 'classnames';

import { IEntity } from '@/modules/comment/types';

import Icon from '@/components/Icon';
import Button from '@/components/Button';

interface IProps {
  item: IEntity.Data;
  onDelete: () => void;
  onEdit: () => void;
}

const Item: React.FC<IProps> = ({ item, onDelete, onEdit }) => {
  const [isSwiped, setIsSwiped] = useState<boolean>(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsSwiped(true),
    onSwipedRight: () => setIsSwiped(false),
    trackMouse: true,
  });

  return (
    <div className={cx('comment__item', isSwiped && 'swiped')} {...handlers}>
      <div className='comment__item-content'>
        <img
          className='comment__item-image'
          src={item.user.profilePhotoUrl}
          alt={item.user.fullName}
          width={40}
          height={40}
        />
        <div className='comment__item-info'>
          <div className='comment__item-top'>
            <strong className='comment__item-name'>{item.user.fullName}</strong>
            <span className='comment__item-time'>{item.createdTime}</span>
          </div>
          <p className='comment__item-text'>{item.text}</p>
        </div>
      </div>

      <div className={cx('comment__item-btns', isSwiped && 'visible')}>
        <Button
          className='comment__item-btn'
          variant='red'
          prefixIcon={<Icon name='Delete' />}
          onClick={onDelete}
        />
        <Button
          className='comment__item-btn'
          variant='blue'
          prefixIcon={<Icon name='Edit' />}
          onClick={onEdit}
        />
      </div>
    </div>
  );
};

export default Item;
