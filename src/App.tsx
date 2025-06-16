import { Box, Container, Typography, Link } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hamed Ajorlou
      </Typography>
      <Typography variant="h5" color="primary" gutterBottom>
        Graduate Research Assistant
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" paragraph>
          I am a Graduate Research Assistant at the University of Rochester, working under the supervision of Prof. Gonzalo Mateos. My research focuses on Graph Neural Networks (GNNs) and their applications in optimization problems.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" paragraph>
          Email: <Link href="mailto:hajorlou@ur.rochester.edu">hajorlou@ur.rochester.edu</Link>
        </Typography>
        <Typography variant="body1" paragraph>
          GitHub: <Link href="https://github.com/hamedajorlou" target="_blank">github.com/hamedajorlou</Link>
        </Typography>
        <Typography variant="body1" paragraph>
          LinkedIn: <Link href="https://www.linkedin.com/in/hamed-ajorlou/" target="_blank">linkedin.com/in/hamed-ajorlou</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default App;



