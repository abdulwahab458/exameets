import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link as MuiLink
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/');
  };

  const inputStyles = {
    bgcolor: '#EBF5FF',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      },
      '&:hover fieldset': {
        border: 'none'
      },
      '&.Mui-focused fieldset': {
        border: 'none'
      }
    },
    '& input': {
      height: '14px',
      fontSize: '0.9rem'
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("exameets.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(3px)',
        }
      }}
    >
      <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={24}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: '16px',
            bgcolor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            transform: 'translateY(-20px)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-25px)',
            },
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 3,
              color: '#1E2A39',
              fontWeight: 'bold'
            }}
          >
            Login to Your Account
          </Typography>

          <TextField
            fullWidth
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            sx={inputStyles}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 1,
              bgcolor: '#1E2A39',
              color: 'white',
              py: 1.5,
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: '#2C3A4A'
              }
            }}
          >
            Login
          </Button>

          <Box sx={{ textAlign: 'center' }}>
            <MuiLink
              component={Link}
              to="/register"
              sx={{
                color: '#005587',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Don't have an account? Register
            </MuiLink>
          </Box>

          <Typography
            variant="body2"
            align="center"
            sx={{
              fontStyle: 'italic',
              color: '#666',
              mt: 1
            }}
          >
            "Focus . Prepare . Succeed"
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login; 