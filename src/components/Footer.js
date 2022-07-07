import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#c0c0c0">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '300px', height: '100px' }} />
    </Stack>
  </Box>
);

export default Footer;
