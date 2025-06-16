import { Box, Container, Typography, Link, Divider, Grid, AppBar, Toolbar, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import profileImage from './assets/meatUofR.jpeg';

function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
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
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={profileImage}
            alt="Hamed Ajorlou"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

function Publications() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Publications
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Journal Articles
        </Typography>
        <Typography variant="body1" paragraph>
          • S. Rey, H. Ajorlou, G. Mateos, "Directed Acyclic Graph Convolutional Networks," IEEE Transactions on Signal Processing, June 2025
        </Typography>
      </Box>
    </Container>
  );
}

function Blog() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" paragraph>
          Coming soon...
        </Typography>
      </Box>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hamed Ajorlou
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/publications">
            Publications
          </Button>
          <Button color="inherit" component={RouterLink} to="/blog">
            Blog
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;



