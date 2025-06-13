import React from 'react';
import { Box, Container, Grid, Typography, Button, IconButton, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/Github';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImage from '../assets/profile.jpg';
import UofRLogo from '../assets/UofR_logo.svg';
import NSFLogo from '../assets/NSF_logo.svg';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Grid container spacing={6}>
        {/* Profile Section */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              backgroundColor: 'transparent',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Hamed Ajorlou"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  mb: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  color: 'text.primary'
                }}
              >
                Hamed Ajorlou
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                gutterBottom
                sx={{ 
                  fontWeight: 500,
                  mb: 2
                }}
              >
                Graduate Research Assistant
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <IconButton 
                  href="https://github.com/hamedajorlou" 
                  target="_blank"
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton 
                  href="https://www.linkedin.com/in/hamed-ajorlou/" 
                  target="_blank"
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  href="mailto:hajorlou@ur.rochester.edu"
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Paper>
        </Grid>

        {/* Main Content Section */}
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              backgroundColor: 'transparent',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary'
                }}
              >
                Research Focus
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 3
                }}
              >
                I am a Graduate Research Assistant at the University of Rochester, working under the supervision of Prof. Gonzalo Mateos. My research focuses on Graph Neural Networks (GNNs) and their applications in optimization problems. I am particularly interested in developing efficient algorithms for large-scale graph processing and exploring the theoretical foundations of GNNs.
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  mb: 3,
                  mt: 4,
                  color: 'text.primary'
                }}
              >
                Technical Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {['Graph Neural Networks', 'Machine Learning', 'Deep Learning', 'Optimization', 'Python', 'PyTorch', 'TensorFlow', 'Data Analysis'].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      backgroundColor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', mt: 4 }}>
                <Box
                  component="img"
                  src={UofRLogo}
                  alt="University of Rochester"
                  sx={{
                    height: 60,
                    opacity: 0.8,
                    transition: 'opacity 0.3s',
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
                    height: 60,
                    opacity: 0.8,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home; 