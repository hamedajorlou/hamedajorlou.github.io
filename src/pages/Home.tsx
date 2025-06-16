import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImage from '../assets/meatUofR.jpeg';
import UofRLogo from '../assets/UofR_logo.svg';
import NSFLogo from '../assets/NSF_logo.svg';
// import UofRLogo from '../assets/UofR_logo.svg';
// import NSFLogo from '../assets/NSF_logo.svg';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 2 }}>
            <Box
              component="img"
              src={profileImage}
              alt="Hamed Ajorlou"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 1,
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h1" gutterBottom>
            Hamed Ajorlou
          </Typography>
          <Typography variant="h3" color="primary" gutterBottom>
            Graduate Research Assistant
          </Typography>
          <Typography variant="body1" paragraph>
            I am a Graduate Research Assistant at the University of Rochester, working under the supervision of Prof. Gonzalo Mateos. My research focuses on Graph Neural Networks (GNNs) and their applications in optimization problems.
          </Typography>
          <Typography variant="body1" paragraph>
            I am particularly interested in developing efficient algorithms for large-scale graph processing and exploring the theoretical foundations of GNNs.
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>
            Research Interests
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
            <li>Graph Neural Networks</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Optimization</li>
            <li>Data Analysis</li>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home; 