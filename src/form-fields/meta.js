import React from 'react';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FieldGroup({ input, meta, ...rest}) {
  const { name, label, help, ...props } = rest;

  let validationState;
  if (!meta.touched) {
    validationState = null;
  } else if (meta.valid) {
    validationState = 'success';
  } else {
    validationState = 'error';
  }

  return (
    <FormGroup controlId={input.name} validationState={validationState}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onDragStart={input.onDragStart}
        onDrop={input.onDrop}
        onFocus={input.onFocus}
        {...props}
      />
      {validationState && meta.error && <HelpBlock>{meta.error}</HelpBlock>}
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

// use this the same way as the redux-form Field component
export default function ReduxFieldGroup(props) {
  return (
    <Field component={FieldGroup} {...props} />
  );
}