import React from 'react';
import { useField } from 'formik';

import config from '@/config';

import { useSingle, useUpload } from '@/modules/file/hooks';

import UploaderBase from '@/components/Uploader';

interface IProps {
  name: string;
  type: 'image' | 'video' | 'file';
  accept: string[];
  maxFileSize?: number;
  validation?: {
    required?: boolean;
  };
}

const Uploader: React.FC<IProps> = ({ name, type, accept, maxFileSize, validation }) => {
  const [field, meta, helpers] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'Majburiy maydon';
      }

      return '';
    },
  });

  const { progress, ...mutation } = useUpload();

  const { item } = useSingle({ id: field.value });

  const onSelect = (file: File) => {
    if (maxFileSize && file.size > maxFileSize * 1000) {
      helpers.setError('Hajmi katta');
      return;
    }

    helpers.setError(undefined);

    mutation.mutate(
      { type, file, placeId: config.app.placeId, userId: config.app.userId },
      {
        onSuccess: data => {
          helpers.setValue(data.id);
        },
      },
    );
  };

  let state: string;

  const status = {
    idle: 'idle',
    loading: 'progress',
    error: 'error',
    success: 'success',
  };

  if (field.value && item.id) {
    state = 'preview';
  } else if (meta.error) {
    state = 'error';
  } else if (field.value && !item.id) {
    state = 'progress';
  } else {
    state = status[mutation.status];
  }

  return (
    <UploaderBase
      {...{ state, type, accept, onSelect }}
      progress={{
        percent: progress.percent,
        total: progress.total,
        loaded: progress.loaded,
        onCancel: () => helpers.setValue(null),
      }}
      file={{
        name: item.name,
        source: item.url,
        size: item.size,
        extension: item.extension,
        onRemove: () => helpers.setValue(null),
      }}
      message={meta.error}
    />
  );
};

export default Uploader;
