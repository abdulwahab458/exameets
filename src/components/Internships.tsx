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

interface InternshipListing {
  company: string;
  role: string;
  qualification: string;
  internshipType: string;
  duration: string;
  field: string;
  location: string;
  startDate: string;
}

const Internships = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Sample data - replace with actual data from your backend
  const internshipListings: InternshipListing[] = [
    {
      company: 'Zomato',
      role: 'Sales Intern',
      qualification: 'Any Graduate',
      internshipType: 'Paid',
      duration: '6 Months',
      field: 'Marketing',
      location: 'Hyderabad',
      startDate: '12-Oct-2024'
    },
    {
      company: 'Google',
      role: 'Software Developer Intern',
      qualification: 'B.Tech/B.E',
      internshipType: 'Paid',
      duration: '3 Months',
      field: 'Technology',
      location: 'Bangalore',
      startDate: '15-Oct-2024'
    },
    {
      company: 'Microsoft',
      role: 'Data Science Intern',
      qualification: 'B.Tech/M.Tech',
      internshipType: 'Paid',
      duration: '6 Months',
      field: 'Data Science',
      location: 'Hyderabad',
      startDate: '11-Oct-2024'
    },
    {
      company: 'Amazon',
      role: 'Product Management Intern',
      qualification: 'MBA/PGDM',
      internshipType: 'Paid',
      duration: '4 Months',
      field: 'Product',
      location: 'Bangalore',
      startDate: '10-Oct-2024'
    },
    {
      company: 'Flipkart',
      role: 'UI/UX Design Intern',
      qualification: 'Any Degree',
      internshipType: 'Paid',
      duration: '3 Months',
      field: 'Design',
      location: 'Mumbai',
      startDate: '14-Oct-2024'
    },
    {
      company: 'Swiggy',
      role: 'Business Analyst Intern',
      qualification: 'MBA/BBA',
      internshipType: 'Paid',
      duration: '5 Months',
      field: 'Analytics',
      location: 'Chennai',
      startDate: '13-Oct-2024'
    },
    {
      company: 'Adobe',
      role: 'Frontend Developer Intern',
      qualification: 'B.Tech/B.E',
      internshipType: 'Paid',
      duration: '6 Months',
      field: 'Technology',
      location: 'Noida',
      startDate: '16-Oct-2024'
    },
    {
      company: 'Deloitte',
      role: 'Consulting Intern',
      qualification: 'Any Graduate',
      internshipType: 'Paid',
      duration: '4 Months',
      field: 'Consulting',
      location: 'Pune',
      startDate: '12-Oct-2024'
    }
  ];

  return (
    <Box sx={{ height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xl" sx={{ pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#005587' }}>
          Internships
        </Typography>

        {/* Search and Filter Section */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Search</Typography>
            <TextField
              size="small"
              placeholder="Search internships here.."
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
              <MenuItem value="location">Location</MenuItem>
              <MenuItem value="duration">Duration</MenuItem>
              <MenuItem value="field">Field</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortBy}
              label="Sort by"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="startDate">Start Date</MenuItem>
              <MenuItem value="duration">Duration</MenuItem>
              <MenuItem value="company">Company</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>

      {/* Internships Table - Scrollable Section */}
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
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Company</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Role</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Qualification</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Internship Type</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Duration</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Field</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Location</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>Start Date</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF' }}>More</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {internshipListings.map((internship, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      '&:nth-of-type(odd)': { bgcolor: '#F8FBFF' },
                      '&:hover': { bgcolor: '#EDF5FF' }
                    }}
                  >
                    <TableCell>{internship.company}</TableCell>
                    <TableCell>{internship.role}</TableCell>
                    <TableCell>{internship.qualification}</TableCell>
                    <TableCell>{internship.internshipType}</TableCell>
                    <TableCell>{internship.duration}</TableCell>
                    <TableCell>{internship.field}</TableCell>
                    <TableCell>{internship.location}</TableCell>
                    <TableCell>{internship.startDate}</TableCell>
                    <TableCell>
                      <Button
                        component={Link}
                        to={`/internships/${index}`}
                        sx={{ 
                          color: '#005587',
                          textTransform: 'none',
                          '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                        }}
                      >
                        View & Apply
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

export default Internships; 