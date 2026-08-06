import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import i18n from './i18next'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';


export default function App() {
  const queryClient = new QueryClient()
  const { i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
