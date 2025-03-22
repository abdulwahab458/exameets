import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileOTP: '',
    emailOTP: '',
    password: '',
    rePassword: '',
    isRobot: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'isRobot' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/registration-steps');
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
        backgroundImage: 'url("/exameets.jpg")',
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
                Enter Mobile OTP
              </Typography>
              <TextField
                fullWidth
                name="mobileOTP"
                value={formData.mobileOTP}
                onChange={handleChange}
                sx={inputStyles}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#005587',
                color: 'white',
                mt: 3,
                px: 2,
                py: 1,
                fontSize: '0.8rem',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#004570'
                }
              }}
            >
              Validate
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
                Enter Email OTP
              </Typography>
              <TextField
                fullWidth
                name="emailOTP"
                value={formData.emailOTP}
                onChange={handleChange}
                sx={inputStyles}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#005587',
                color: 'white',
                mt: 3,
                px: 2,
                py: 1,
                fontSize: '0.8rem',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#004570'
                }
              }}
            >
              Validate
            </Button>
          </Box>

          <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
            Create Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            type="password"
            name="rePassword"
            placeholder="Re-Enter Password"
            value={formData.rePassword}
            onChange={handleChange}
            sx={inputStyles}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="isRobot"
                checked={formData.isRobot}
                onChange={handleChange}
                sx={{
                  color: '#005587',
                  '&.Mui-checked': {
                    color: '#005587',
                  },
                }}
              />
            }
            label="I am not a robot"
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: '0.9rem',
                color: '#333'
              }
            }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 1,
              bgcolor: '#1E2A39',
              color: 'white',
              py: 1,
              px: 5,
              borderRadius: '24px',
              alignSelf: 'center',
              minWidth: '100px',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: '#2C3A4A'
              }
            }}
          >
            Next
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default OTPVerification; 