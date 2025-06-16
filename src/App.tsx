import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a237e', // Deep blue, academic color
    },
    secondary: {
      main: '#424242', // Dark gray
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
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
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;



