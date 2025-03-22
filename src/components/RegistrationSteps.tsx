import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const RegistrationSteps = () => {
  const [formData, setFormData] = useState({
    notifications: '',
    studyingStatus: '',
    educationLevel: ''
  });

  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/login');
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
            gap: 2.5
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              mb: 0.5
            }}
          >
            Select exams/jobs for notifications
          </Typography>
          <FormControl fullWidth>
            <Select
              value={formData.notifications}
              onChange={handleChange}
              name="notifications"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              sx={selectStyles}
            >
              <MenuItem value="" disabled>Select option</MenuItem>
              <MenuItem value="government">Government Jobs</MenuItem>
              <MenuItem value="tech">Tech Jobs</MenuItem>
              <MenuItem value="internships">Internships</MenuItem>
              <MenuItem value="all">All Notifications</MenuItem>
            </Select>
          </FormControl>

          <Typography
            variant="body1"
            sx={{
              color: '#333',
              mb: 0.5
            }}
          >
            Are you currently studying?
          </Typography>
          <FormControl fullWidth>
            <Select
              value={formData.studyingStatus}
              onChange={handleChange}
              name="studyingStatus"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              sx={selectStyles}
            >
              <MenuItem value="" disabled>Select option</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>

          <Typography
            variant="body1"
            sx={{
              color: '#333',
              mb: 0.5
            }}
          >
            Select your education Level
          </Typography>
          <FormControl fullWidth>
            <Select
              value={formData.educationLevel}
              onChange={handleChange}
              name="educationLevel"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              sx={selectStyles}
            >
              <MenuItem value="" disabled>Select option</MenuItem>
              <MenuItem value="highschool">High School</MenuItem>
              <MenuItem value="undergraduate">Undergraduate</MenuItem>
              <MenuItem value="graduate">Graduate</MenuItem>
              <MenuItem value="postgraduate">Post Graduate</MenuItem>
            </Select>
          </FormControl>

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
            Done
          </Button>

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

export default RegistrationSteps; 