import { Box, Container, Typography, Link, Divider, Grid, AppBar, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import profileImage from './assets/meatUofR.jpeg';

function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
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
              I am a Graduate Research Assistant at the University of Rochester, working under the supervision of Prof.{' '}
              <Link href="https://www.hajim.rochester.edu/ece/sites/gmateos/" target="_blank">Gonzalo Mateos</Link>.
              My research focuses on Graph Neural Networks (GNNs), topology inference and causal structure learning.
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
              <li>Topology Inference</li>
              <li>Optimization</li>
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Education */}
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" gutterBottom>
              Education
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                University of Rochester
              </Typography>
              <Typography variant="body2" paragraph>
                Ph.D. in Electrical Engineering
                <br />
                <Typography component="span" variant="body2" color="text.secondary">
                  2023 – Present
                </Typography>
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                University of Rochester
              </Typography>
              <Typography variant="body2" paragraph>
                M.Sc. in Electrical Engineering
                <br />
                <Typography component="span" variant="body2" color="text.secondary">
                  2023 – 2025
                </Typography>
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Sharif University of Technology
              </Typography>
              <Typography variant="body2" paragraph>
                B.Sc. in Electrical Engineering
                <br />
                <Typography component="span" variant="body2" color="text.secondary">
                  2018 – 2023
                </Typography>
              </Typography>
            </Box>
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
              Google Scholar: <Link href="https://scholar.google.com/citations?user=f8i-0EYAAAAJ&hl=en" target="_blank">Google Scholar Profile</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={profileImage}
            alt="Hamed Ajorlou"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: '500px',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* News / Publications */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          News
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Journal Articles
        </Typography>
        <Box component="ol" sx={{ pl: 3, '& li': { mb: 1.5 } }}>
          <Typography component="li" variant="body2">
            H. Ajorlou, G. Mateos, and M. Tepper, "Online DAG learning from streaming observational data,"{' '}
            <em>IEEE Trans. Signal Process.</em>, vol. 74, March 2026 (submitted)
          </Typography>
          <Typography component="li" variant="body2">
            G. Mateos, S. Rey, H. Ajorlou, and M. Tepper, "Concomitant DAG learning: On the roles of noise adaptivity, sparsity, and non-negativity,"{' '}
            <em>IEEE Signal Process. Mag.</em>, vol. 43, February 2026 (full paper invited)
          </Typography>
          <Typography component="li" variant="body2">
            S. Rey, H. Ajorlou, and G. Mateos, "Directed acyclic graph convolutional networks,"{' '}
            <em>IEEE Trans. Signal Process.</em>, vol. 72, June 2025 (revised)
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Conference Papers
        </Typography>
        <Box component="ol" sx={{ pl: 3, '& li': { mb: 1.5 } }}>
          <Typography component="li" variant="body2">
            H. Ajorlou, S. Rey, G. Mateos, G. Leus, and A. G. Marques, "BUILD with precision: Bottom-up inference of linear DAGs," in{' '}
            <em>Proc. Int. Conf. Acoustics, Speech, Signal Process.</em>, Barcelona, Spain, May 4–8, 2026
          </Typography>
          <Typography component="li" variant="body2">
            H. Ajorlou, G. Mateos, and L. Ruiz, "Dirichlet meets Horvitz and Thompson: Estimating homophily in large graphs via sampling," in{' '}
            <em>Proc. Asilomar Conf. on Signals, Systems, Computers</em>, Pacific Grove, CA, October 26–29, 2025
          </Typography>
          <Typography component="li" variant="body2">
            S. Rey, H. Ajorlou, and G. Mateos, "Convolutional learning on directed acyclic graphs," in{' '}
            <em>Proc. Asilomar Conf. on Signals, Systems, Computers</em>, Pacific Grove, CA, October 27–30, 2024
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Workshops
        </Typography>
        <Box component="ol" sx={{ pl: 3, '& li': { mb: 1.5 } }}>
          <Typography component="li" variant="body2">
            S. Rey, H. Ajorlou, and G. Mateos, "DAG convolutional networks," in{' '}
            <em>NeurIPS New Perspectives in Advancing Graph Machine Learning</em>, San Diego, CA, December 7, 2025
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Presentations at Technical Events
        </Typography>
        <Box component="ol" sx={{ pl: 3, '& li': { mb: 1.5 } }}>
          <Typography component="li" variant="body2">
            "BUILD with precision: Bottom-up inference of linear DAGs,"{' '}
            <em>University of Rochester Graduate Research Day</em>, Rochester, NY, April 2, 2026 (Oral)
          </Typography>
          <Typography component="li" variant="body2">
            "Convolutional learning on directed acyclic graphs,"{' '}
            <em>Finger Lakes Science and Technology Showcase</em>, Rochester, NY, April 24, 2025 (Poster)
          </Typography>
          <Typography component="li" variant="body2">
            "Convolutional learning on directed acyclic graphs,"{' '}
            <em>University of Rochester Graduate Research Day</em>, Rochester, NY, March 28, 2025 (Poster)
          </Typography>
        </Box>
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
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
