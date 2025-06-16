import { Box, Typography, Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Test Page
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          If you can see this, the deployment is working!
        </Typography>
      </Box>
    </Container>
  );
}

export default App;



