import React from "react";
import { useFormikContext, FormikContextType } from "formik";
import AppButton from "../AppButton";

interface FormValues {
  [key: string]: any; // Replace with actual form values shape if known
}

interface Props {
  title: string;
  color: string;
  textColor: string;
  [key: string]: any;
}

const SubmitButton: React.FC<Props> = ({
  title,
  color,
  textColor,
  ...otherProps
}) => {
  const { handleSubmit } =
    useFormikContext<FormValues>() as FormikContextType<FormValues>;

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      color={color}
      textColor={textColor}
      {...otherProps}
    />
  );
};

export default SubmitButton;
