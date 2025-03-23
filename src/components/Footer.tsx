import { Box, Container, Link, Stack, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: '#005587', color: 'white', mt: 'auto' }}>
      {/* Main Footer Content */}
      <Container maxWidth={false} sx={{ py: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          {/* Copyright */}
          <Box sx={{ 
            display: 'flex', 
            gap: 0.5,
            fontSize: '0.875rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            © {currentYear} Exameets, All rights Reserved
          </Box>

          {/* Links */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            sx={{
              fontSize: '0.875rem',
              '& > a': { 
                color: 'white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }
            }}
          >
            <Link href="#">Contact Us</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Community</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Our Team</Link>
          </Stack>

          {/* Partnership Text */}
          <Box sx={{ 
            display: 'flex', 
            gap: 0.5,
            fontSize: '0.875rem',
            alignItems: 'center'
          }}>
            Developed in Partnership with Ceeras
          </Box>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton 
              href="#" 
              size="small" 
              sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton 
              href="#" 
              size="small" 
              sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton 
              href="#" 
              size="small" 
              sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton 
              href="#" 
              size="small" 
              sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              href="#" 
              size="small" 
              sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>

      {/* Scrolling Text */}
      <Box 
        sx={{ 
          bgcolor: 'black',
          color: 'white',
          py: 0.5,
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}
      >
        <Box
          sx={{
            animation: 'scroll 20s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(-100%)' }
            },
            display: 'inline-block'
          }}
        >
          Success is not final, Failure is not final, It is the courage to continue that counts
        </Box>
      </Box>
    </Box>
  );
};

export default Footer; 