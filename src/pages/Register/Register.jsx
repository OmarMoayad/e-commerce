import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios';
import axiosInstance from '../../API/axiosinstance';

export default function Register() {
  const { register, handleSubmit } = useForm();

  const RegisterForm = async (data) => {
    try {
      const response = await axiosInstance.post(`/auth/Account/Register`, data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box component="section" className="registerPage">
      <Typography component="h1" variant="h1" sx={{ fontSize: "48px", fontWeight: "bold", margin: "20px", color: "#567effff" }} >
        Register
      </Typography>

      <Box onSubmit={handleSubmit(RegisterForm)} component="form" sx={{ marginTop: 2, display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: 2}}>
        <TextField  {...register('userName')} sx={{width: "20%"}} label="userName" variant="outlined" />
        <TextField  {...register('fullName')} sx={{width: "20%"}} label="full Name" variant="outlined" />
        <TextField  {...register('email')} sx={{width: "20%"}} label="email" variant="outlined" />
        <TextField  {...register('phoneNumber')} sx={{width: "20%"}} label="phoneNumber" variant="outlined" />
        <TextField  {...register('password')} sx={{width: "20%"}} label="password" variant="outlined" />
        <Button variant="contained" type="submit">Register</Button>
      </Box>
    </Box>
  );
}