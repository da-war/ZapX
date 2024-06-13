import React from "react";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";

import { FormikContextType, FormikValues, useFormikContext } from "formik";
import { TextInputProps } from "react-native";

interface AppFormFieldProps extends TextInputProps {
  name: string;
}

const AppFormField: React.FC<AppFormFieldProps> = ({ name, ...otherProps }) => {
  //add types to formik context
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<FormikValues>() as FormikContextType<FormikValues>;

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
