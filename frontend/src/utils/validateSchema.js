import * as yup from 'yup';

const validateSchema = (fieldTooShort, requiredField) => {
  return (
    yup.object().shape({
      login: yup.string()
        .min(6, fieldTooShort)
        .trim()
        .required(requiredField),
      password: yup.string()
        .min(6, fieldTooShort)
        .trim()
        .required(requiredField),
    })
  )
};

export default validateSchema;