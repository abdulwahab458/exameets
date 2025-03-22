import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QuizIcon from '@mui/icons-material/Quiz';

const navigationItems = [
  { icon: <HomeIcon />, text: 'Home', link: '/' },
  { icon: <WorkIcon />, text: 'Govt\nJobs', link: '/govt-jobs' },
  { icon: <ComputerIcon />, text: 'Software\nJobs', link: '/software-jobs' },
  { icon: <BusinessCenterIcon />, text: 'Internship', link: '/internship' },
  { icon: <SchoolIcon />, text: 'Admissions', link: '/admissions' },
  { icon: <QuizIcon />, text: 'PYQ', link: '/pyq' },
  { icon: <MenuBookIcon />, text: 'Courses', link: '/courses' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const isAuthPage = ['/', '/login', '/register'].includes(location.pathname);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#005587', height: '100%', color: 'white' }}>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.link}
            component={Link}
            to={item.link}
            onClick={handleDrawerToggle}
            sx={{
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      {/* Top Blue Bar */}
      <Box sx={{ bgcolor: '#005587', color: 'white', py: 0.5, textAlign: 'center' }}>
        <Typography variant="body2">
          "Exameets is a one stop platform for students, where all the needs are met"
        </Typography>
      </Box>
      {/* Main Navbar */}
      <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: '#005587',
                  fontWeight: 700,
                  fontFamily: "'Times New Roman', Times, serif",
                  mb: 0.5,
                  fontSize: '3.5rem'
                }}
              >
                exameets
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  fontFamily: "'Times New Roman', Times, serif",
                  borderTop: '2px solid #005587',
                  paddingTop: '4px'
                }}
              >
                we set your needs
              </Typography>
            </Box>
            {/* Mobile Menu Icon */}
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              /* Desktop Navigation Icons */
              <Box sx={{ 
                display: 'flex', 
                gap: 4, 
                alignItems: 'center',
                height: '100%'
              }}>
                {navigationItems.map((item, index) => (
                  <Box
                    key={index}
                    component={Link}
                    to={item.link}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: '#005587',
                      gap: 0.5,
                      width: '60px',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        '& .icon-circle': {
                          bgcolor: '#0077be',
                        },
                        '& .nav-text': {
                          color: '#0077be'
                        }
                      }
                    }}
                  >
                    <Box
                      className="icon-circle"
                      sx={{
                        bgcolor: '#005587',
                        borderRadius: '50%',
                        width: 36,
                        height: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: 'background-color 0.2s ease-in-out'
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      component="div"
                      variant="caption"
                      align="center"
                      className="nav-text"
                      sx={{
                        whiteSpace: 'pre-line',
                        lineHeight: 1,
                        fontSize: '0.7rem',
                        color: '#005587',
                        transition: 'color 0.2s ease-in-out',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* Bottom Blue Bar */}
      <Box sx={{ bgcolor: '#005587', color: 'white', py: 0.75 }}>
        <Container maxWidth="xl">
          {isAuthPage ? (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>Register to get the notifications you need {'>>>>'}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button component={Link} to="/login" sx={{ color: 'white', textTransform: 'none' }}>
                  Login
                </Button>
                <Typography>|</Typography>
                <Button component={Link} to="/register" sx={{ color: 'white', textTransform: 'none' }}>
                  Register
                </Button>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>Welcome UserName..</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Link 
                    to="/profile" 
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Profile
                  </Link>
                  <Typography>-</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mx: 2 }}>
                  <Link 
                    to="/change-password"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Change Password
                  </Link>
                  <Typography>-</Typography>
                </Box>
                <Link 
                  to="/logout"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Logout
                </Link>
              </Box>
            </Box>
          )}
        </Container>
      </Box>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 