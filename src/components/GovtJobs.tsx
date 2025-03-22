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
import { Link } from 'react-router-dom';

interface GovtJobListing {
  organizationName: string;
  details: string;
  qualification: string;
  registrationStartDate: string;
  registrationEndDate: string;
}

const GovtJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortBy, setSortBy] = useState('');


  const govtJobListings: GovtJobListing[] = [
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    },
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    },
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    },
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    },
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    },
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    },
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    },
    {
      organizationName: 'NIACL',
      details: 'Administrative Officer - 50 posts',
      qualification: 'Any Degree',
      registrationStartDate: '06-Sep-2024',
      registrationEndDate: '29-Sep-2024'
    }
  ];

  return (
    <Box sx={{ height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xl" sx={{ pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#005587' }}>
          Government Jobs
        </Typography>

        {/* Search and Filter Section */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Search</Typography>
            <TextField
              size="small"
              placeholder="Search government jobs here.."
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
              <MenuItem value="organization">Organization</MenuItem>
              <MenuItem value="qualification">Qualification</MenuItem>
              <MenuItem value="registrationDate">Registration Date</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortBy}
              label="Sort by"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="registrationDate">Registration Date</MenuItem>
              <MenuItem value="organization">Organization</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>

      {/* Jobs Table - Scrollable Section */}
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
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Organization Name</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Details</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Qualification</TableCell>
                  <TableCell colSpan={2} align="center" sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Registration</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>More Information</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}></TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}></TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}></TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>Starts On</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>Ends On</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {govtJobListings.map((job, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      '&:nth-of-type(odd)': { bgcolor: '#F8FBFF' },
                      '&:hover': { bgcolor: '#EDF5FF' }
                    }}
                  >
                    <TableCell>{job.organizationName}</TableCell>
                    <TableCell>{job.details}</TableCell>
                    <TableCell>{job.qualification}</TableCell>
                    <TableCell>{job.registrationStartDate}</TableCell>
                    <TableCell>{job.registrationEndDate}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ 
                          color: '#005587',
                          textTransform: 'none',
                          '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                        }}
                      >
                        Get Details{'>>'} 
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

export default GovtJobs;
