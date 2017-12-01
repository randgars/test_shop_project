import React from 'react';

import TextField from 'react-md/lib/TextFields';

const renderTextField = ({
    input,
    meta: { touched, error },
    ...custom
  }) =>
    <TextField
      errorText={touched && error}
      error={touched && error ? true : false}
      {...input}
      {...custom}
    />

export default renderTextField;
