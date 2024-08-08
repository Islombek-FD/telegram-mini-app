import React from 'react';
import { useField } from 'formik';

import TextBase, { IProps as IInputProps } from '@/components/Input';

export interface IProps extends Omit<IInputProps, 'id' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
  onChange?: (value: string) => void;
}

const Text: React.FC<IProps> = ({ name, validation, onChange, ...props }) => {
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
    <TextBase
      {...field}
      {...props}
      id={field.name}
      value={field.value || ''}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={value => {
        helper.setValue(value);
        onChange && onChange(value);
      }}
    />
  );
};

export default Text;
