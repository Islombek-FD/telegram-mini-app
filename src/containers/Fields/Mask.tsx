import React from 'react';
import { useField } from 'formik';

import MaskBase, { IProps as IInputProps } from '@/components/Input/Mask';

interface IProps extends Omit<IInputProps, 'id' | 'value'> {
  name: string;
  caseUpper?: boolean;
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
  onChange?: (value: string) => void;
}

const Mask: React.FC<IProps> = ({ name, mask, caseUpper, validation, onChange, ...props }) => {
  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'Majburiy maydon';
      }

      if (!mask) {
        return "Natog'ri formatda kiritdiz";
      }

      if (validation.min && validation.min > (value || '').length) {
        return `Kamida ${validation.min} bo'lishi kerak`;
      }

      if (validation.max && validation.max < (value || '').length) {
        return `Ko'pi bilan ${validation.min} bo'lishi kerak`;
      }

      if (validation.minLength && validation.minLength > (value || '').length) {
        return `Kamida ${validation.min} ta harf bo'lishi kerak`;
      }

      if (validation.maxLength && validation.maxLength < (value || '').length) {
        return `Ko'pi bilan ${validation.min} ta harf bo'lishi kerak`;
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  return (
    <MaskBase
      {...field}
      {...props}
      {...{ mask }}
      id={field.name}
      value={field.value || ''}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={value => {
        helper.setValue(caseUpper ? value.toUpperCase() : value);
        onChange && onChange(value);
      }}
    />
  );
};

export default Mask;
