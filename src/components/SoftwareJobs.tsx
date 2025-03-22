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

interface JobListing {
  company: string;
  role: string;
  experience: number;
  qualification: string;
  salary: string;
  location: string;
  postedDate: string;
}

const SoftwareJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Sample data - replace with actual data from your backend
  const jobListings: JobListing[] = [
    {
      company: 'Creativise',
      role: 'Frontend Developer',
      experience: 0,
      qualification: 'B.E/B.Tech/CS',
      salary: 'Not Disclosed',
      location: 'Pune',
      postedDate: '12-Oct-2024'
    },
    {
      company: 'Microsoft',
      role: 'Software Engineer',
      experience: 2,
      qualification: 'B.Tech/M.Tech',
      salary: '18-25 LPA',
      location: 'Bangalore',
      postedDate: '11-Oct-2024'
    },
    {
      company: 'Amazon',
      role: 'Backend Developer',
      experience: 1,
      qualification: 'B.E/B.Tech/CS',
      salary: '12-18 LPA',
      location: 'Hyderabad',
      postedDate: '10-Oct-2024'
    },
    {
      company: 'Google',
      role: 'Full Stack Developer',
      experience: 3,
      qualification: 'B.Tech/M.Tech',
      salary: '25-35 LPA',
      location: 'Bangalore',
      postedDate: '09-Oct-2024'
    },
    {
      company: 'TCS',
      role: 'Java Developer',
      experience: 0,
      qualification: 'Any Graduate',
      salary: '4.5-6.5 LPA',
      location: 'Mumbai',
      postedDate: '12-Oct-2024'
    },
    {
      company: 'Infosys',
      role: 'Python Developer',
      experience: 1,
      qualification: 'B.E/B.Tech',
      salary: '5-8 LPA',
      location: 'Chennai',
      postedDate: '11-Oct-2024'
    },
    {
      company: 'Wipro',
      role: 'DevOps Engineer',
      experience: 2,
      qualification: 'B.Tech/MCA',
      salary: '8-12 LPA',
      location: 'Pune',
      postedDate: '10-Oct-2024'
    },
    {
      company: 'Accenture',
      role: 'React Developer',
      experience: 1,
      qualification: 'B.E/B.Tech',
      salary: '6-9 LPA',
      location: 'Hyderabad',
      postedDate: '09-Oct-2024'
    }
  ];

  return (
    <Box sx={{ height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xl" sx={{ pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#005587' }}>
          Software Jobs
        </Typography>

        {/* Search and Filter Section */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Search</Typography>
            <TextField
              size="small"
              placeholder="Search software jobs here.."
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
              <MenuItem value="experience">Experience</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortBy}
              label="Sort by"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="date">Posted Date</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
              <MenuItem value="experience">Experience</MenuItem>
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
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Company</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Role</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Experience</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Qualification</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Salary</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Location</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>Posted Date</TableCell>
                  <TableCell sx={{ bgcolor: '#F8FBFF', fontWeight: 'bold' }}>More</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobListings.map((job, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      '&:nth-of-type(odd)': { bgcolor: '#F8FBFF' },
                      '&:hover': { bgcolor: '#EDF5FF' }
                    }}
                  >
                    <TableCell>{job.company}</TableCell>
                    <TableCell>{job.role}</TableCell>
                    <TableCell>{job.experience}</TableCell>
                    <TableCell>{job.qualification}</TableCell>
                    <TableCell>{job.salary}</TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>{job.postedDate}</TableCell>
                    <TableCell>
                      <Button
                        component={Link}
                        to={`/software-jobs/${index}`}
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

export default SoftwareJobs; 