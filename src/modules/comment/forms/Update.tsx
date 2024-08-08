import React from 'react';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { useMutation, useQueryClient } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  id: number;
  values: Types.IForm.Values;
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Update: React.FC<IProps> = ({ id, values, onSuccess, onError, onSettled, children }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Types.IEntity.Data, string, IFormValues, any>(
    async values => {
      const { data } = await Api.Update({ id, values });

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
        placeId: values.placeId,
        userId: values.userId,
        star: values.star,
        text: values.text,
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

export default Update;
