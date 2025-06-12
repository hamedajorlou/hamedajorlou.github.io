import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        maxWidth: '1800px'
      }}
    >
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          alignItems: 'center',
          pr: { xs: 2, md: 4 },
          justifyContent: 'flex-end',
        }}
      >
        <Grid 
          item 
          xs={12} 
          md={7} 
          sx={{
            pl: { md: 32 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Contact Me
            </Typography>
          </motion.div>

          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" paragraph>
              Email: <a href="mailto:hajorlou@ur.rochester.edu" style={{ color: '#1976d2', textDecoration: 'underline' }}>hajorlou@ur.rochester.edu</a>
            </Typography>
            <Typography variant="body1" paragraph>
              Office: 701 Computer Science Building
            </Typography>
            <Typography variant="body1" paragraph>
              Phone: +1 (585) 490-6184
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 