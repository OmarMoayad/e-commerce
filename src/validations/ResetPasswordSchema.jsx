import * as yup from 'yup';
export  const resetPasswordSchema = yup.object({
  newPassword: yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required")
    .max(32, "Password must be at most 32 characters"),

  password: yup.string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your password"),
});
