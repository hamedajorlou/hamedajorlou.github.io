import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#86868b',
      light: '#a1a1a6',
      dark: '#6e6e73',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1d1d1f',
      secondary: '#86868b',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "SF Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3.5rem',
      letterSpacing: '-0.015em',
      '@media (min-width:600px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.015em',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '-0.015em',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '-0.015em',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '-0.015em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      letterSpacing: '-0.015em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '-0.015em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 980,
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '12px 24px',
          fontWeight: 500,
          letterSpacing: '-0.015em',
        },
        contained: {
          backgroundColor: '#000000',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
          '&:hover': {
            borderColor: '#333333',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            pt: '100px',
            minHeight: '100vh',
            backgroundColor: 'background.default',
            px: { xs: 2, md: 3 }
          }}
        >
          <Container 
            maxWidth={false} 
            sx={{ 
              maxWidth: '1400px',
              ml: { xs: 0, md: '5%' }
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;



