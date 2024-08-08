import React from 'react';
import { useField } from 'formik';

import TextareaBase, { IProps as ITextareaProps } from '@/components/Textarea';

interface IProps extends Omit<ITextareaProps, 'id' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const Textarea: React.FC<IProps> = ({ name, validation, ...props }) => {
  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'Majburiy maydon';
      }

      if (validation.min && validation.min > (value || '').length) {
        return `Kamida ${validation.min} ta harf bo'lishi kerak`;
      }

      if (validation.max && validation.max < (value || '').length) {
        return `Ko'pi bilan ${validation.min} ta harf bo'lishi kerak`;
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  return (
    <TextareaBase
      {...field}
      {...props}
      id={field.name}
      value={field.value || ''}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={value => {
        helper.setValue(value);
      }}
    />
  );
};

export default Textarea;
