import { Box, Container, Typography, Link, Divider, Grid, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import profileImage from './assets/meatUofR.jpeg';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 5, fontFamily: '"EB Garamond", Georgia, serif' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography variant="h4" component="h1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700 }}>
            Hamed Ajorlou
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', color: 'text.secondary' }}>
            Graduate Research Assistant, University of Rochester
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700, mb: 1 }}>
            About
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }} paragraph>
            I am a Graduate Research Assistant at the University of Rochester, working under the supervision of
            Prof.{' '}<Link href="https://www.hajim.rochester.edu/ece/sites/gmateos/" target="_blank" sx={{ color: 'inherit' }}>Gonzalo Mateos</Link>.
            My research focuses on Graph Neural Networks (GNNs), topology inference and causal structure learning.
            I am particularly interested in developing efficient algorithms for large-scale graph processing
            and exploring the theoretical foundations of GNNs.
          </Typography>

          <Typography variant="h6" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700, mt: 3, mb: 1 }}>
            Research Interests
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
            Graph Neural Networks &middot; Topology Inference &middot; Optimization
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700, mb: 1 }}>
            Education
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }} paragraph>
            <strong>University of Rochester</strong> — Ph.D. in Electrical Engineering, 2023 – Present
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }} paragraph>
            <strong>University of Rochester</strong> — M.Sc. in Electrical Engineering, 2023 – 2025
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }} paragraph>
            <strong>Sharif University of Technology</strong> — B.Sc. in Electrical Engineering,{' '}<span style={{ whiteSpace: 'nowrap' }}>2018 – 2023</span>
          </Typography>

        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={profileImage}
            alt="Hamed Ajorlou"
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: '400px',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', textAlign: 'center', mt: 2 }}>
            <Link href="mailto:hajorlou@ur.rochester.edu" sx={{ color: 'inherit' }}>hajorlou@ur.rochester.edu</Link>
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 1 }}>
            <IconButton component="a" href="https://github.com/hamedajorlou" target="_blank" sx={{ color: '#222' }}>
              <GitHubIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton component="a" href="https://scholar.google.com/citations?user=f8i-0EYAAAAJ&hl=en" target="_blank" sx={{ color: '#222' }}>
              <SchoolIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton component="a" href="/CV.pdf" target="_blank" sx={{ color: '#222' }}>
              <DescriptionIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700, mb: 3 }}>
        News
      </Typography>

      <Box sx={{ '& > *': { mb: 2 } }}>
        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>Summer 2026</strong> — I will be joining <strong>Fidelity Investments</strong> in Boston, MA as an Applied Scientist intern, working closely with the Quantitative Research and Graph Technology team.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>May 2026</strong> — Our paper "BUILD with precision: Bottom-up inference of linear DAGs" (with S. Rey, G. Mateos, G. Leus, and A. G. Marques) will be presented at <em>ICASSP 2026</em> in Barcelona, Spain.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>April 2026</strong> — I will give an oral presentation on "BUILD with precision: Bottom-up inference of linear DAGs" at the <em>University of Rochester Graduate Research Day</em>.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>March 2026</strong> — Our paper "Online DAG learning from streaming observational data" (with G. Mateos and M. Tepper) has been submitted to <em>IEEE Transactions on Signal Processing</em>.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>February 2026</strong> — Our invited full paper "Concomitant DAG learning: On the roles of noise adaptivity, sparsity, and non-negativity" (with G. Mateos, S. Rey, and M. Tepper) will appear in <em>IEEE Signal Processing Magazine</em>.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>December 2025</strong> — Our workshop paper "DAG convolutional networks" (with S. Rey and G. Mateos) was presented at <em>NeurIPS New Perspectives in Advancing Graph Machine Learning</em> in San Diego, CA.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>October 2025</strong> — Our paper "Dirichlet meets Horvitz and Thompson: Estimating homophily in large graphs via sampling" (with G. Mateos and L. Ruiz) was presented at the <em>Asilomar Conference on Signals, Systems, and Computers</em>.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>June 2025</strong> — Our paper "Directed acyclic graph convolutional networks" (with S. Rey and G. Mateos) has been revised for <em>IEEE Transactions on Signal Processing</em>.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>April 2025</strong> — Poster presentation on "Convolutional learning on directed acyclic graphs" at the <em>Finger Lakes Science and Technology Showcase</em>, Rochester, NY.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>March 2025</strong> — Poster presentation on "Convolutional learning on directed acyclic graphs" at the <em>University of Rochester Graduate Research Day</em>.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }}>
          <strong>October 2024</strong> — Our paper "Convolutional learning on directed acyclic graphs" (with S. Rey and G. Mateos) was presented at the <em>Asilomar Conference on Signals, Systems, and Computers</em>.
        </Typography>
      </Box>

    </Container>
  );
}

export default App;
