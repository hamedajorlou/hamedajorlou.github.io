import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import profileImage from '../assets/meatUofR.jpeg';

const Home = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        maxWidth: '1800px' // Custom max width to prevent too wide layout
      }}
    >
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          alignItems: 'center',
          pr: { xs: 2, md: 4 }, // Reduced right padding
          justifyContent: 'flex-end', // Push content to the right
        }}
      >
        <Grid 
          item 
          xs={12} 
          md={7} 
          sx={{
            pl: { md: 32 }, // Significantly increased left padding for more central position
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box>
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
                Hamed Ajorlou
              </Typography>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                Graduate Research Assistant
              </Typography>
              
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontSize: '1.1rem',
                  color: 'text.primary',
                  lineHeight: 1.8,
                  letterSpacing: 0.3,
                  maxWidth: '600px',
                  mb: 4,
                }}
              >
                I'm a second-year Ph.D. student at the University of Rochester, advised by Prof. Gonzalo Mateos. My research interests lie at the intersection of Graph Neural Networks (GNNs), optimization, and graphical models. I received my bachelor's degree from Sharif University of Technology in Tehran, Iran.
              </Typography>

              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontSize: '1.1rem',
                  color: 'text.primary',
                  lineHeight: 1.8,
                  letterSpacing: 0.3,
                  maxWidth: '600px',
                  mb: 4,
                }}
              >
                Currently, I'm focused on developing novel approaches in graph representation learning, particularly leveraging GNNs for complex network analysis and optimization problems. I'm especially interested in the interplay between machine learning and signal processing on graphs, aiming to design scalable, interpretable, and theoretically grounded models.
              </Typography>

              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                Education
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    lineHeight: 1.8,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  Ph.D. in Electrical and Computer Engineering
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  University of Rochester • Sep 2023 - Present
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    lineHeight: 1.8,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  M.Sc. in Electrical Engineering
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  Sharif University of Technology • Sep 2023 - Jun 2025
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    lineHeight: 1.8,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  B.Sc. in Electrical Engineering
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  Sharif University of Technology • Sep 2018 - Jun 2023
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/projects"
                  sx={{ 
                    minWidth: 120,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{ 
                    minWidth: 120,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                  }}
                >
                  Contact Me
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconLink href="https://github.com/hamedajorlou" icon={<GitHub />} label="GitHub" />
                <IconLink href="https://linkedin.com/in/hamedajorlou" icon={<LinkedIn />} label="LinkedIn" />
                <IconLink href="mailto:hajorlou@ur.rochester.edu" icon={<Email />} label="Email" />
              </Box>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '500px' },
                width: '100%',
                overflow: 'hidden',
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Hamed Ajorlou"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Paper 
              elevation={0}
              sx={{ 
                p: 4,
                mt: 4,
                borderRadius: 4,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'right' }}>
                Technical Expertise
              </Typography>
              <Grid container spacing={2} justifyContent="flex-end">
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