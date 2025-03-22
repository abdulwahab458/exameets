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

  // Filter and sort internships
  const filteredInternships = internshipListings
    .filter(internship => {
      const searchLower = searchQuery.toLowerCase();
      return (
        internship.company.toLowerCase().includes(searchLower) ||
        internship.role.toLowerCase().includes(searchLower) ||
        internship.field.toLowerCase().includes(searchLower) ||
        internship.location.toLowerCase().includes(searchLower)
      );
    })
    .filter(internship => {
      if (!filterValue) return true;
      switch (filterValue) {
        case 'location':
          return internship.location === 'Hyderabad' || internship.location === 'Bangalore';
        case 'duration':
          return internship.duration === '6 Months' || internship.duration === '3 Months';
        case 'field':
          return internship.field === 'Technology' || internship.field === 'Marketing';
        default:
          return true;
      }
    })
    .sort((a, b) => {
      if (!sortBy) return 0;
      switch (sortBy) {
        case 'startDate':
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        case 'company':
          return a.company.localeCompare(b.company);
        default:
          return 0;
      }
    });

  return (
    <Box sx={{ 
      height: 'calc(100vh - 180px)', // Fixed height for the entire component
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'white'
    }}>
      {/* Fixed Header Section */}
      <Box sx={{ px: 3, pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#005587', fontWeight: 500 }}>
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
                maxWidth: '300px',
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
      </Box>

      {/* Scrollable Table Section */}
      <Box sx={{ 
        flex: 1, 
        overflow: 'auto',
        px: 3,
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#666',
          },
        },
      }}>
        <TableContainer 
          component={Paper} 
          sx={{ 
            boxShadow: 'none',
            border: '1px solid #e0e0e0',
            height: '100%'
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Company</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Role</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Qualification</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Internship Type</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Duration</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Field</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Location</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Start Date</TableCell>
                <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 600 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredInternships.length > 0 ? (
                filteredInternships.map((internship, index) => (
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
                        variant="contained"
                        size="small"
                        sx={{ 
                          bgcolor: '#005587',
                          '&:hover': { bgcolor: '#004570' }
                        }}
                      >
                        Apply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} align="center" sx={{ py: 3 }}>
                    <Typography variant="body1" color="textSecondary">
                      No internships found matching your criteria
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Internships; 