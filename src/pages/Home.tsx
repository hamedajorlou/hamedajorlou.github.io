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
            <Typography variant="h3" component="h1" gutterBottom>
              Hamed Ajorlou
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Ph.D. Candidate
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              University of Rochester
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              I am a Ph.D. candidate in the Department of Electrical and Computer Engineering at the University of Rochester, 
              working under the supervision of Prof. Jiebo Luo. My research focuses on developing novel machine learning 
              approaches for healthcare applications, with a particular emphasis on medical image analysis and clinical 
              decision support systems.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/projects"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                }}
              >
                View Projects
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                }}
              >
                Contact Me
              </Button>
            </Box>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <IconButton
                component="a"
                href="https://github.com/hamedajorlou"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/hamed-ajorlou/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:hajorlou@ur.rochester.edu"
                color="primary"
              >
                <Email />
              </IconButton>
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
              }}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h4" component="h2" gutterBottom align="left">
              Technical Expertise
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-start', mb: 4 }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 4, mt: 4 }}>
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

export default Home; 