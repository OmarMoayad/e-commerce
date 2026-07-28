import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import axiosInstance from '../../API/axiosInstance';
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from '../../validations/LoginSchema';
import { useState } from 'react';

export default function Login() {
  const [serverErrors, setServerErrors] = useState({});


  const {register,handleSubmit,formState: { errors, isSubmitting }} = useForm({ resolver: yupResolver(loginSchema) });

  const LoginForm = async (data) => {
    try {
      const response = await axiosInstance.post(`/auth/Account/Login`, data);
      console.log(response);
    } catch (err) {
      setServerErrors(err.response.data.errors);
    }
  };

  return (
    <Box component="section" className="registerPage">
      <Typography component="h1" variant="h1" sx={{ fontSize: "48px", fontWeight: "bold", margin: "20px", color: "#567effff" }} >
        Login
      </Typography>

      <Box>
        {serverErrors?.length > 0 ? serverErrors.map((error) => (
          <Typography variant='p' color="error">{error}</Typography>
        )) : ""}
      </Box>

      <Box onSubmit={handleSubmit(LoginForm)} component="form" sx={{ marginTop: 2, display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: 2 }}>
        <TextField  {...register('email')} sx={{ width: "20%" }} label="email" variant="outlined" error={errors.email} helperText={errors.email?.message} />
        <TextField  {...register('password')} sx={{ width: "20%" }} label="password" variant="outlined" error={errors.password} helperText={errors.password?.message} />
        <Button variant="contained" type="submit" disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : "Login"}</Button>
      </Box>

    </Box>
  );
}