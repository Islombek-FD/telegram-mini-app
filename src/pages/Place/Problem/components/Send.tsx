import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import config from '@/config';

import { RootState } from '@/store';

import * as Forms from '@/modules/problem/forms';

import * as Fields from '@/containers/Fields';

import Icon from '@/components/Icon';
import Label from '@/components/Label';
import Button from '@/components/Button';
import Spacer from '@/components/Spacer';
import Spinner from '@/components/Spinner';

const Send: React.FC = () => {
  const navigate = useNavigate();
  const place = useSelector((state: RootState) => state.place.item);

  return (
    <Forms.Send
      onSuccess={() => {
        navigate('/place');
      }}
    >
      {({ isSubmitting, setFieldValue, handleSubmit }) => (
        <>
          {isSubmitting && <Spinner full />}

          <Label title='Xatolikni yozing'>
            <Fields.Textarea name='text' validation={{ required: true }} />
          </Label>

          <Spacer size={24} />

          <Button
            title='Yuborish'
            prefixIcon={<Icon name='Send' size={20} />}
            onClick={() => {
              setFieldValue('placeId', place.id);
              setFieldValue('userId', config.app.userId);
              handleSubmit();
            }}
            block
          />
        </>
      )}
    </Forms.Send>
  );
};

export default Send;
