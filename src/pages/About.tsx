import { Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1800px'
      }}
    >
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px'
        }}
      >
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" component="h1" gutterBottom align="center">
              About Me
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h5" gutterBottom align="center">
                Professional Background
              </Typography>
              <Typography paragraph align="center">
                [Your professional background and experience here]
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h5" gutterBottom align="center">
                Skills & Expertise
              </Typography>
              <Typography paragraph align="center">
                [List your technical skills and areas of expertise]
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom align="center">
                Education & Certifications
              </Typography>
              <Typography paragraph align="center">
                [Your educational background and certifications]
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 