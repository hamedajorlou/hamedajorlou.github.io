import { AppBar, Toolbar, Typography, Button, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            HAMED AJORLOU
          </Typography>

          <Box sx={{ display: 'flex', gap: isMobile ? 1 : 2 }}>
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                sx={{
                  color: isActive(link.path) ? 'primary.main' : 'text.primary',
                  fontWeight: isActive(link.path) ? 600 : 400,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'primary.main',
                    transform: isActive(link.path) ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 