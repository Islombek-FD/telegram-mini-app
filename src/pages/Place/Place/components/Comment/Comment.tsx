import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useList, useDelete } from '@/modules/comment/hooks';

import ConfirmModal from '@/containers/ConfirmModal';

import Icon from '@/components/Icon';
import Title from '@/components/Title';
import Empty from '@/components/Empty';
import Button from '@/components/Button';
import Rating from '@/components/Rating';
import Spinner from '@/components/Spinner';

import Item from './components/Item';

import './Comment.css';

const Comment: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { items, isFetched } = useList({ placeId: 203675 });

  const deleteMutation = useDelete();

  return (
    <div className='comment'>
      <Title text='Reyting' />

      <div className='comment__card'>
        <strong className='comment__rating'>4.2</strong>
        <div>
          <Rating rating={4} />
          <span className='comment__count'>32 marta baholangan</span>
        </div>
      </div>

      <Title text='Sharh qoldirish' />

      <div className='comment__card'>
        <Button
          title='Sharh yozish'
          variant='light-blue'
          prefixIcon={<Icon name='Send' size={20} />}
          onClick={() => navigate('/comment-create')}
          block
        />
      </div>

      {!isFetched ? (
        <Spinner color='#007AFF' />
      ) : items.length ? (
        <>
          <Title text='Sharhlar' />

          <div className='comment__items'>
            {items.map(item => (
              <Item
                item={item}
                onDelete={() => {
                  setSelectedId(item.id);
                }}
                onEdit={() => {
                  console.log('onEdit');
                }}
                key={item.id}
              />
            ))}
          </div>
        </>
      ) : (
        <Empty icon='NoComment' description="Hozircha sharhlar yo'q" />
      )}

      <ConfirmModal
        isOpen={!!selectedId}
        title='Sharhni o’chirishni xohlaysizmi?'
        onCancel={() => {
          setSelectedId(null);
        }}
        onConfirm={() =>
          deleteMutation.mutate(
            { id: selectedId! },
            {
              onSuccess: () => {
                setSelectedId(null);
              },
            },
          )
        }
      />
    </div>
  );
};

export default Comment;
