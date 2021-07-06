import React, { useState, useEffect, useRef } from 'react';

interface initialValues {
  name: string;
  email: string;
  message: string;
}

interface onSubmitProps {
  values: initialValues;
  errors: any;
}

interface useCustomFormProps {
  initialValues: initialValues;
  onSubmit({ values, errors }: onSubmitProps): void;
}

const useCustomForm = ({ initialValues, onSubmit }: useCustomFormProps) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState<boolean>(false);
  const [onBlur, setOnBlur] = useState<boolean>(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnSubmitting(false);
      setOnBlur(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    console.log(name, value, values);
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    setErrors({ ...errors });
    onSubmit({ values, errors });
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useCustomForm;
