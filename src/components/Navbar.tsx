import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="default" elevation={0} sx={{ backgroundColor: 'white', minHeight: '80px' }}>
      <Container maxWidth={false} sx={{ width: '100%' }}>
        <Toolbar 
          disableGutters 
          sx={{ 
            width: '100%', 
            px: { xs: 2, md: 4 }, 
            minHeight: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{
                fontWeight: 500,
                fontSize: '1.1rem',
                py: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{
                fontWeight: 500,
                fontSize: '1.1rem',
                py: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                },
              }}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/projects"
              color="inherit"
              sx={{
                fontWeight: 500,
                fontSize: '1.1rem',
                py: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                },
              }}
            >
              Projects
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{
                fontWeight: 500,
                fontSize: '1.1rem',
                py: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 