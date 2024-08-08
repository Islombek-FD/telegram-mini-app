import React from 'react';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { useMutation } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

export type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Send: React.FC<IProps> = ({ onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation<Types.IEntity.Data, string, IFormValues, any>(
    async values => {
      const { data } = await Api.Send({ values });

      return Mappers.getData(data);
    },
    {
      onSuccess,
      onError,
      onSettled,
    },
  );

  const handleSubmit = (values: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
    mutation.mutate(values, {
      onSettled: () => setSubmitting(false),
    });
  };

  return (
    <Formik<IFormValues>
      onSubmit={handleSubmit}
      initialValues={{
        placeId: null,
        userId: null,
        text: '',
      }}
      enableReinitialize
    >
      {(props: FormikProps<IFormValues>) => (
        // @ts-ignore
        <Form>{children(props)}</Form>
      )}
    </Formik>
  );
};

export default Send;
