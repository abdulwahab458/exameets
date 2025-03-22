import { Box, Container, Paper, Typography, TextField, Button } from '@mui/material';

const Home = () => {
  const notifications = [
    "Important notification : Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification : Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification : Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification : Entrance exam for IITs - JEE Advanced scheduled on May 3",
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2, md: 4 }
      }}>
        <Box sx={{ flex: { xs: '1', md: '2' } }}>
          <Paper 
            sx={{ 
              p: { xs: 2, md: 4 }, 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 2
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom 
              align="center" 
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
              }}
            >
              Welcome to Exameets – Your One-Stop Solution for All Your Aspirations!
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                mt: 2,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Exameets is more than just a website – it's a comprehensive platform designed to meet 
              the unique needs of students and professionals. Our goal is to provide all the resources 
              you need for your academic journey and career progression, from study materials and job 
              notifications to travel support for exams and admissions.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ flex: { xs: '1', md: '1' } }}>
          <Paper sx={{ 
            p: { xs: 2, md: 3 }, 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2
          }}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
            >
              What's New
            </Typography>
            <TextField 
              fullWidth 
              size="small" 
              placeholder="Search..."
              sx={{ mb: 2 }}
            />
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              mb: 2,
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <Button 
                variant="contained" 
                color="primary"
                fullWidth={true}
                sx={{ flex: { sm: 1 } }}
              >
                Search
              </Button>
              <Button 
                variant="outlined"
                fullWidth={true}
                sx={{ flex: { sm: 1 } }}
              >
                Cancel
              </Button>
            </Box>
            <Box sx={{ 
              maxHeight: { xs: 300, md: 400 }, 
              overflow: 'auto'
            }}>
              {notifications.map((notification, index) => (
                <Typography 
                  key={index} 
                  variant="body2" 
                  sx={{ 
                    mb: 1,
                    p: 1,
                    borderBottom: '1px solid #eee',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                >
                  {'>'}{'>'}  {notification}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 