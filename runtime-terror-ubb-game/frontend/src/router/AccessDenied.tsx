import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AccessDeniedProps {}

export const AccessDenied: React.FC<AccessDeniedProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '250px'
        }}
      >
        <h1>Access denied</h1>
        <Button
          variant="contained"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};
