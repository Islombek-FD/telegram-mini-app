import React from 'react';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { useMutation, useQueryClient } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

export type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Create: React.FC<IProps> = ({ onSuccess, onError, onSettled, children }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Types.IEntity.Data, string, IFormValues, any>(
    async values => {
      const { data } = await Api.Create({ values });

      return Mappers.getData(data);
    },
    {
      onSuccess: data => {
        queryClient.invalidateQueries({
          predicate: query =>
            query.queryKey[0] === Constants.ENTITY && query.queryKey[1] === 'list',
        });
        onSuccess && onSuccess(data);
      },
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
        star: 0,
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

export default Create;
