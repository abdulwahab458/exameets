import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import GovtJobs from './components/GovtJobs';
import SoftwareJobs from './components/SoftwareJobs';
import Internships from './components/Internships';
import Admissions from './components/Admissions';
import PYQ from './components/PYQ';
import Login from './components/Login';
import Register from './components/Register';
import OTPVerification from './components/OTPVerification';
import RegistrationSteps from './components/RegistrationSteps';
import Courses from './components/Courses';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005587',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/software-jobs" element={<SoftwareJobs />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/govt-jobs" element={<GovtJobs />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/pyq" element={<PYQ />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/otp-verification" element={<OTPVerification />} />
              <Route path="/registration-steps" element={<RegistrationSteps />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
