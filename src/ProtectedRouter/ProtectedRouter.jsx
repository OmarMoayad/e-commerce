import React from 'react'
import useAuthStore from '../auth/useAuthStore'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRouter({ children }) {
    const token = useAuthStore((state) => state.token);
    if (!token) {
        return <Navigate to="/login" />;
    }
    return children;
}
