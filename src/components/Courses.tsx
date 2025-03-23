import {
  Box,
  Container,
  Typography,
  TextField,
  useMediaQuery,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ConstructionIcon from '@mui/icons-material/Construction';

const Courses = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl" sx={{ height: '100%', py: { xs: 2, sm: 3 } }}>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 1,
        boxShadow: 1,
        overflow: 'hidden'
      }}>
        {/* Header Section */}
        <Box sx={{ 
          p: { xs: 2, sm: 3 },
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'white'
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 2, 
              color: '#005587', 
              fontWeight: 500,
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            Courses
          </Typography>

          {/* Search Section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            mb: 2
          }}>
            <Typography variant="body2" sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
              Search
            </Typography>
            <TextField
              size="small"
              placeholder="Search courses here.."
              sx={{ 
                flex: 1,
                maxWidth: { xs: '100%', sm: '300px' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                  bgcolor: '#EBF5FF',
                  fontSize: '0.875rem',
                  height: '36px'
                }
              }}
              InputProps={{
                endAdornment: <SearchIcon color="action" fontSize="small" />
              }}
            />
          </Box>
        </Box>

        {/* Under Construction Message */}
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 3 },
          textAlign: 'center'
        }}>
          <Box sx={{ 
            width: { xs: 60, sm: 80 },
            height: { xs: 60, sm: 80 },
            borderRadius: '50%',
            bgcolor: '#EBF5FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
          }}>
            <ConstructionIcon sx={{ 
              fontSize: { xs: 30, sm: 40 },
              color: '#005587'
            }} />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#005587',
              mb: 1,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            Under Construction
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '400px',
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            We're working hard to bring you the best courses. Stay tuned for updates!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Courses; 