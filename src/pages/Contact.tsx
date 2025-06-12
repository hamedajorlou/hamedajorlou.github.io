import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Me
        </Typography>
      </motion.div>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1" paragraph>
          Email: <a href="mailto:hajorlou@ur.rochester.edu" style={{ color: '#1976d2', textDecoration: 'underline' }}>hajorlou@ur.rochester.edu</a>
        </Typography>
        <Typography variant="body1" paragraph>
          Office: 701 CSB Building, River Campus
        </Typography>
        <Typography variant="body1" paragraph>
          Phone: (123) 456-7890
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 