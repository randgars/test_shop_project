import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from 'react-md/lib/Buttons/Button';

import textField from '../../../sources/materialComponents/TextField';

const productForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="name"
        lineDirection="left"
        name="name"
        placeholder="Enter name of product"
        label="Name of product"
        component={textField}
      />
      <Field
        id="description"
        lineDirection="left"
        name="description"
        placeholder="Enter description"
        label="Description"
        component={textField}
      />
      <Button
        flat
        primary
        swapTheming
        type="submit"
      >
        Done
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'productForm'
})(productForm);