import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Home = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ minHeight: '90vh', alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hi, I'm Hamed
            </Typography>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Software Engineer & Researcher
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
              I specialize in developing innovative solutions and conducting research in computer science.
              My focus is on creating impactful technology that solves real-world problems.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/projects"
                sx={{ minWidth: 120 }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ minWidth: 120 }}
              >
                Contact Me
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconLink href="https://github.com/hamedajorlou" icon={<GitHub />} label="GitHub" />
              <IconLink href="https://linkedin.com/in/hamedajorlou" icon={<LinkedIn />} label="LinkedIn" />
              <IconLink href="mailto:hajorlou@ur.rochester.edu" icon={<Email />} label="Email" />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paper 
              elevation={0}
              sx={{ 
                p: 4,
                borderRadius: 4,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Technical Expertise
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Machine Learning',
                  'Data Science',
                  'Python',
                  'React',
                  'TypeScript',
                  'Node.js',
                  'SQL',
                  'Git',
                ].map((skill) => (
                  <Grid item key={skill}>
                    <Chip label={skill} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

const IconLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={icon}
      sx={{
        color: 'text.secondary',
        '&:hover': {
          color: 'primary.main',
        },
      }}
    >
      {label}
    </Button>
  </motion.div>
);

const Chip = ({ label }: { label: string }) => (
  <Box
    sx={{
      px: 2,
      py: 1,
      bgcolor: 'primary.main',
      color: 'white',
      borderRadius: 2,
      fontSize: '0.9rem',
      fontWeight: 500,
    }}
  >
    {label}
  </Box>
);

export default Home; 