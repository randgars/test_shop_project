import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from 'react-md/lib/Buttons/Button';

import textField from '../../../sources/materialComponents/TextField';

const shopForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="name"
        lineDirection="left"
        name="name"
        placeholder="Enter name of shop"
        label="Name of shop"
        component={textField}
      />
      <Field
        id="startTime"
        lineDirection="left"
        name="startTime"
        placeholder="Enter start time"
        label="Start time"
        component={textField}
      />
      <Field
        id="endTime"
        lineDirection="left"
        name="endTime"
        placeholder="Enter end time"
        label="End time"
        component={textField}
      />
      <Field
        id="city"
        lineDirection="left"
        name="city"
        placeholder="Enter the city"
        label="City"
        component={textField}
      />
      <Field
        id="address"
        lineDirection="left"
        name="address"
        placeholder="Enter the address"
        label="Address"
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
  form: 'shopForm'
})(shopForm);