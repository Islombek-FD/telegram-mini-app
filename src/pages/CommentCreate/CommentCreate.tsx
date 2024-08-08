import React from 'react';
import { useSelector } from 'react-redux';

import config from '@/config';

import { RootState } from '@/store';

import * as Forms from '@/modules/comment/forms';

import * as Fields from '@/containers/Fields';

import Label from '@/components/Label';
import Spacer from '@/components/Spacer';
import Rating from '@/components/Rating';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

import './CommentCreate.css';

const CommentCreate: React.FC = () => {
  const place = useSelector((state: RootState) => state.place.item);

  return (
    <div className='comment-create'>
      <Forms.Create
        onSuccess={() => {
          console.log('Comment successfully created!');
        }}
      >
        {({ isSubmitting, values, setFieldValue, handleSubmit }) => (
          <>
            {isSubmitting && <Spinner full />}

            <Label title='Baholash'>
              <div className='comment-create__rating'>
                <Rating
                  rating={values.star}
                  onClick={star => {
                    setFieldValue('star', star);
                  }}
                  size={40}
                />
                <span className='comment-create__rating-text'>Baholang</span>
              </div>
            </Label>

            <Spacer size={24} />

            <Label title='Rasm qo’shish'>
              <Fields.Uploader name='image' type='image' accept={['image/*']} maxFileSize={10240} />
            </Label>

            <Spacer size={24} />

            <Label title='Sharh qoldirish'>
              <Fields.Textarea name='text' validation={{ required: true }} />
            </Label>

            <Spacer size={24} />

            <Button
              title='Yuborish'
              onClick={() => {
                setFieldValue('userId', config.app.userId);
                setFieldValue('placeId', place.id);
                handleSubmit();
              }}
              block
            />
          </>
        )}
      </Forms.Create>
    </div>
  );
};

export default CommentCreate;
