import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const examData = [
  { id: 1, name: 'BPSC CCE' },
  { id: 2, name: 'SSC GD' },
  { id: 3, name: 'JEE Mains' },
  { id: 4, name: 'NEET' },
  { id: 5, name: 'UPSC' },
  { id: 6, name: 'TCS NQT' },
  { id: 7, name: 'MET' },
  { id: 8, name: 'Google' },
  { id: 9, name: 'GATE CSE' },
  { id: 10, name: 'GATE ECE' },
  { id: 11, name: 'CAT' },
  { id: 12, name: 'MAT' },
  { id: 13, name: 'CTET' },
  { id: 14, name: 'UGC NET' },
  { id: 15, name: 'IBPS PO' },
  { id: 16, name: 'SBI PO' },
  { id: 17, name: 'RRB NTPC' },
  { id: 18, name: 'SSC CGL' },
  { id: 19, name: 'SSC CHSL' },
  { id: 20, name: 'AFCAT' }
];

const PYQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed Header Section */}
      <Box sx={{ p: 3, bgcolor: 'white' }}>
        <Typography variant="h5" sx={{ mb: 3, color: '#1E2A39', fontWeight: 'bold' }}>
          Previous Year Question Papers
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: 1,
          alignItems: 'center'
        }}>
          <Typography sx={{ fontSize: '14px' }}>
            Search
          </Typography>
          <TextField
            fullWidth
            placeholder="Search here.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#005587' }} />
                </InputAdornment>
              ),
            }}
            sx={{ 
              maxWidth: '300px',
              '& .MuiOutlinedInput-root': {
                height: '36px',
                bgcolor: '#EBF5FF',
                '& fieldset': { border: 'none' },
                '&:hover fieldset': { border: 'none' },
                '&.Mui-focused fieldset': { border: 'none' }
              },
              '& .MuiOutlinedInput-input': {
                padding: '8px 14px',
                fontSize: '0.875rem'
              }
            }}
          />
        </Box>
      </Box>

      {/* Scrollable Cards Section */}
      <Box sx={{ 
        flex: 1,
        overflowY: 'auto',
        px: 3,
        pb: 3,
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#005587',
          borderRadius: '4px',
        },
      }}>
        <Grid container spacing={3}>
          {examData.map((exam) => (
            <Grid item xs={12} sm={6} md={3} key={exam.id}>
              <Card
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #005587',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardContent sx={{ 
                  flex: 1, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  p: 2
                }}>
                  <Typography 
                    variant="h6" 
                    align="center"
                    sx={{ 
                      color: '#1E2A39',
                      fontWeight: 500
                    }}
                  >
                    {exam.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                  p: 0, 
                  '& .MuiButton-root': { 
                    borderRadius: 0,
                    py: 1
                  } 
                }}>
                  <Button 
                    fullWidth 
                    variant="contained"
                    sx={{ 
                      bgcolor: '#005587',
                      '&:hover': {
                        bgcolor: '#004570'
                      }
                    }}
                  >
                    Download
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PYQ; 