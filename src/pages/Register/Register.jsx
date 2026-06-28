import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios';
import axiosInstance from '../../API/axiosInstance';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { registerSchema } from '../../validations/RegisterSchema';
import { useState } from 'react';

export default function Register() {
  const [serverErrors, setServerErrors] = useState({});


  const { register, handleSubmit, formState: { errors }, isSubmitting } = useForm({
    resolver: yupResolver(registerSchema)
  });


  const RegisterForm = async (data) => {
    try {
      const response = await axiosInstance.post(`/auth/Account/Register`, data);
      console.log(response);
    } catch (err) {
      setServerErrors(err.response.data.errors);
    }
  };

  return (
    <Box component="section" className="registerPage">
      <Typography component="h1" variant="h1" sx={{ fontSize: "48px", fontWeight: "bold", margin: "20px", color: "#567effff" }} >
        Register
      </Typography>

      <Box>
        {serverErrors?.length > 0 ? serverErrors.map((error) => (
          <Typography variant='p' color="error">{error}</Typography>
        )) : ""}
      </Box>

      <Box onSubmit={handleSubmit(RegisterForm)} component="form" sx={{ marginTop: 2, display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: 2 }}>
        <TextField  {...register('userName')} sx={{ width: "20%" }} label="userName" variant="outlined" error={errors.userName} helperText={errors.userName?.message} />
        <TextField  {...register('fullName')} sx={{ width: "20%" }} label="full Name" variant="outlined" error={errors.fullName} helperText={errors.fullName?.message} />
        <TextField  {...register('email')} sx={{ width: "20%" }} label="email" variant="outlined" error={errors.email} helperText={errors.email?.message} />
        <TextField  {...register('phoneNumber')} sx={{ width: "20%" }} label="phoneNumber" variant="outlined" error={errors.phoneNumber} helperText={errors.phoneNumber?.message} />
        <TextField  {...register('password')} sx={{ width: "20%" }} label="password" variant="outlined" error={errors.password} helperText={errors.password?.message} />
        <Button variant="contained" type="submit" disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : "register"}</Button>
      </Box>

    </Box>
  );
}