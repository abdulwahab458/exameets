import {
  Box,
  Typography,
  TextField,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Courses = () => {
  return (
    <Box sx={{ 
      height: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <Box sx={{ 
        bgcolor: '#EBF5FF',
        p: 2
      }}>
        <Typography 
          sx={{ 
            fontSize: '16px',
            fontWeight: 500,
            mb: 2
          }}
        >
          Courses
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1
        }}>
          <Typography sx={{ fontSize: '14px' }}>
            Search
          </Typography>
          <Box sx={{ 
            display: 'flex',
            flex: 1,
            position: 'relative',
            maxWidth: '300px'
          }}>
            <TextField
              fullWidth
              placeholder="Search here.."
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'white',
                  height: '36px',
                  '& fieldset': {
                    borderColor: '#e0e0e0'
                  },
                  '& input': {
                    padding: '8px 14px',
                    fontSize: '0.875rem'
                  }
                }
              }}
            />
            <IconButton 
              sx={{ 
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#005587',
                padding: '4px'
              }}
            >
              <SearchIcon sx={{ fontSize: '20px' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3
      }}>
        <Box sx={{
          bgcolor: '#EBF5FF',
          borderRadius: '16px',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}>
          <Box sx={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            bgcolor: '#005587',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ErrorOutlineIcon sx={{ color: 'white' }} />
          </Box>
          <Typography sx={{ color: '#333' }}>
            This page is under Construction
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses; 