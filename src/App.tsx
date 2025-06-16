import { Box, Container, Typography, Link, Divider } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Typography variant="h3" component="h1" gutterBottom>
        Hamed Ajorlou
      </Typography>
      <Typography variant="h5" color="primary" gutterBottom>
        Graduate Research Assistant
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        University of Rochester
      </Typography>
      
      <Divider sx={{ my: 3 }} />

      {/* About */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" paragraph>
          I am a Graduate Research Assistant at the University of Rochester, working under the supervision of Prof. Gonzalo Mateos. My research focuses on Graph Neural Networks (GNNs) and their applications in optimization problems.
        </Typography>
        <Typography variant="body1" paragraph>
          I am particularly interested in developing efficient algorithms for large-scale graph processing and exploring the theoretical foundations of GNNs.
        </Typography>
      </Box>

      {/* Research Interests */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Research Interests
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
          <li>Graph Neural Networks</li>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Optimization</li>
          <li>Data Analysis</li>
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Contact */}
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



