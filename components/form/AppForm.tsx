import React from "react";

import { Formik } from "formik";

interface Props {
  initialValues: Object;
  onSubmit: Function;
  validationSchema: Object;
  children: React.ReactNode;
}

const AppForm: React.FC<Props> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => onSubmit()}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
