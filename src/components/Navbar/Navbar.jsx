import React from 'react';
import Box from '@mui/material/Box';
import logo from "../../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import useAuthStore from "../../auth/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Box component="nav" sx={{display: "flex",alignItems: "center",gap: 2,p: 2,}}>
      <img src={logo} alt="logo" width={100} height={100} />
      <Link component={RouterLink} to="/" sx={{textDecoration: "none",color: "black", "&:hover": {
      color: "primary.main",
    }}}>Home</Link>
    {token ? <>
      <Link component={RouterLink} to="/cart" sx={{textDecoration: "none",color: "black", "&:hover": {
      color: "primary.main",
    }}}>Cart</Link>
    <Link onClick={handleLogout} sx={{textDecoration: "none",color: "black", "&:hover": {
      color: "primary.main",
    }}}>Logout</Link>
    </>:<> 
    <Link component={RouterLink} to="/login" sx={{textDecoration: "none",color: "black", "&:hover": {
      color: "primary.main",
    }}}>Login</Link>
      <Link component={RouterLink} to="/register" sx={{textDecoration: "none",color: "black", "&:hover": {
      color: "primary.main",
    }}}>Register</Link>
    </>}
      <Link component={RouterLink} to="/products" sx={{textDecoration: "none",color: "black", "&:hover": {
      color: "primary.main",
    }}}>Products</Link>
    </Box>
  );
}