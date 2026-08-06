import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material';


export default function Footer() {
  const {t} = useTranslation();
  return (
    <Box>
      {t("Footer")}
    </Box>
  )
}
