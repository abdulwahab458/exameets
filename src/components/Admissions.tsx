import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface AdmissionListing {
  institutionName: string;
  course: string;
  applyDate: string;
  lastDate: string;
}

const Admissions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Sample data matching the image
  const admissionListings: AdmissionListing[] = [
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    },
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    },
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    },
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    },
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    },
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    },
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    },
    {
      institutionName: 'IPU CET',
      course: 'UG / PG / Ph.D',
      applyDate: '06-Sep-2024',
      lastDate: '29-Sep-2024'
    }
  ];

  return (
    <Box sx={{ height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xl" sx={{ pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#005587' }}>
          Admissions Page
        </Typography>

        {/* Search and Filter Section */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Search</Typography>
            <TextField
              size="small"
              placeholder="Search here.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ 
                flex: 1,
                maxWidth: '400px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                  bgcolor: 'white',
                  fontSize: '0.875rem'
                }
              }}
              InputProps={{
                endAdornment: <SearchIcon color="action" fontSize="small" />
              }}
            />
          </Box>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Filter</InputLabel>
            <Select
              value={filterValue}
              label="Filter"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <MenuItem value="institution">Institution</MenuItem>
              <MenuItem value="course">Course</MenuItem>
              <MenuItem value="date">Date</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortBy}
              label="Sort by"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="institution">Institution</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>

      {/* Admissions Table - Scrollable Section */}
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <TableContainer 
            component={Paper} 
            sx={{ 
              boxShadow: 'none',
              height: '100%',
              overflow: 'auto'
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Institution Name</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Course</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Apply Date</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Last Date</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>More Information</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {admissionListings.map((admission, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      '&:nth-of-type(odd)': { bgcolor: '#F8FBFF' },
                      '&:hover': { bgcolor: '#EDF5FF' }
                    }}
                  >
                    <TableCell>{admission.institutionName}</TableCell>
                    <TableCell>{admission.course}</TableCell>
                    <TableCell>{admission.applyDate}</TableCell>
                    <TableCell>{admission.lastDate}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ 
                          color: '#005587',
                          textTransform: 'none',
                          '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                        }}
                      >
                        View&Apply{'>>'} 
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default Admissions; 