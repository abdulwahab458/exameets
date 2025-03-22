import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  InputAdornment
} from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';

interface ExamPaper {
  name: string;
  downloadLink: string;
}

const examData = [
  { id: 1, name: 'BPSC CCE', year: '2023', papers: 12 },
  { id: 2, name: 'SSC GD', year: '2023', papers: 8 },
  { id: 3, name: 'JEE Mains', year: '2023', papers: 15 },
  { id: 4, name: 'NEET', year: '2023', papers: 10 },
  { id: 5, name: 'UPSC', year: '2023', papers: 20 },
  { id: 6, name: 'TCS NQT', year: '2023', papers: 6 },
  { id: 7, name: 'MET', year: '2023', papers: 5 },
  { id: 8, name: 'Google', year: '2023', papers: 4 },
  { id: 9, name: 'GATE CSE', year: '2023', papers: 15 },
  { id: 10, name: 'GATE ECE', year: '2023', papers: 12 },
  { id: 11, name: 'CAT', year: '2023', papers: 8 },
  { id: 12, name: 'MAT', year: '2023', papers: 6 },
  { id: 13, name: 'CTET', year: '2023', papers: 10 },
  { id: 14, name: 'UGC NET', year: '2023', papers: 14 },
  { id: 15, name: 'IBPS PO', year: '2023', papers: 18 },
  { id: 16, name: 'SBI PO', year: '2023', papers: 16 },
  { id: 17, name: 'RRB NTPC', year: '2023', papers: 12 },
  { id: 18, name: 'SSC CGL', year: '2023', papers: 15 },
  { id: 19, name: 'SSC CHSL', year: '2023', papers: 10 },
  { id: 20, name: 'AFCAT', year: '2023', papers: 8 }
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
        <TextField
          fullWidth
          placeholder="Search for exam papers..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#005587' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
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
            <Grid item xs={12} sm={6} md={4} key={exam.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#EBF5FF',
                  borderRadius: '12px',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardContent sx={{ flex: 1, p: 2.5 }}>
                  <Typography variant="h6" sx={{ color: '#1E2A39', mb: 1, fontWeight: 'bold' }}>
                    {exam.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Year: {exam.year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Available Papers: {exam.papers}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    fullWidth
                    sx={{
                      bgcolor: '#005587',
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#004570'
                      }
                    }}
                  >
                    Download Papers
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PYQ; 