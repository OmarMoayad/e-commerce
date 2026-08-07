import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import i18n from './i18next'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import gettheme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import themeStore from './auth/useThemeStore';


export default function App() {
  const queryClient = new QueryClient()
  const { i18n } = useTranslation();
  const mode = themeStore((state)=> state.mode);
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={gettheme(mode)}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}