import { Box, Container } from '@mui/material';
import React from 'react';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '250px',
        }}
      >
        <h1>404</h1>
      </Box>
    </Container>
  );
};
