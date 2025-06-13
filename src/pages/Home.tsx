import { Container, Typography, Box, Button, Grid, Paper, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import profileImage from '../assets/meatUofR.jpeg';
import UofRLogo from '../assets/UofR_logo.svg';
import NSFLogo from '../assets/NSF_logo.svg';

const Home = () => {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '1800px' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center', justifyContent: 'flex-start', maxWidth: '1200px', ml: { xs: 2, md: '8%' } }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
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
                Ph.D. Candidate
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
              I'm a second-year Ph.D. student at the University of Rochester, advised by Prof. <a href="https://www.hajim.rochester.edu/ece/sites/gmateos/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Gonzalo Mateos</a>. My research interests lie at the intersection of Graph Neural Networks (GNNs), optimization, and graphical models. I received my bachelor's degree from Sharif University of Technology in Tehran, Iran.

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
                  University of Rochester, Rochester, NY • Sep 2023 - Present
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
                  M.Sc. in Electrical and Computer Engineering
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  University of Rochester, Rochester, NY • Sep 2023 - Jun 2025
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
                  Sharif University of Technology, Tehran, Iran • Aug 2018 - Jun 2023
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

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Hamed Ajorlou"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: 4,
                boxShadow: 3,
                mb: 4
              }}
            />
            <Paper 
              elevation={0}
              sx={{ 
                p: 3,
                width: '100%',
                maxWidth: 400,
                borderRadius: 4,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                mb: 4
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom align="left">
                Technical Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-start' }}>
                {['GNNs', 'Optimization', 'Pytorch', 'Deep Learning', 'Git', 'Bash', 'Linux'].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 4 }}>
              <Box
                component="img"
                src={UofRLogo}
                alt="University of Rochester"
                sx={{
                  height: '60px',
                  width: 'auto',
                  opacity: 0.8,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              />
              <Box
                component="img"
                src={NSFLogo}
                alt="National Science Foundation"
                sx={{
                  height: '60px',
                  width: 'auto',
                  opacity: 0.8,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              />
            </Box>
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

export default Home; 