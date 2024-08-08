import React from 'react';
import { useField } from 'formik';

import CheckboxBase, { IProps as ICheckboxProps } from '@/components/Checkbox';

interface IProps extends ICheckboxProps {
  name: string;
}

const Checkbox: React.FC<IProps> = ({ name, ...props }) => {
  const [field, , helper] = useField({ name });

  return (
    <CheckboxBase
      {...props}
      checked={field.value || ''}
      onChange={value => helper.setValue(value)}
    />
  );
};

export default Checkbox;
