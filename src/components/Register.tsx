import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/otp-verification');
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

  const selectStyles = {
    height: '48px',
    bgcolor: '#EBF5FF',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    borderRadius: '8px',
    color: '#333',
    '& .MuiSelect-icon': {
      color: '#333'
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
            Create Your Account
          </Typography>

          <TextField
            fullWidth
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            sx={inputStyles}
          />

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
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            sx={inputStyles}
          />

          <FormControl fullWidth>
            <Select
              value={formData.gender}
              onChange={handleSelectChange}
              name="gender"
              displayEmpty
              sx={selectStyles}
            >
              <MenuItem value="" disabled>Select Gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

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
            Register
          </Button>

          <Box sx={{ textAlign: 'center' }}>
            <MuiLink
              component={Link}
              to="/login"
              sx={{
                color: '#005587',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Already have an account? Login
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

export default Register; 