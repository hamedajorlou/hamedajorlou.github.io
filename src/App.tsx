import { useState, useRef, useCallback } from 'react';
import { Box, Container, Typography, Link, Divider, Grid, IconButton, Stack, LinearProgress, Modal } from '@mui/material';
import { HashRouter as Router, Routes, Route, Link as RouterLink, useParams } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import img1 from './assets/meatUofR.jpeg';
import img2 from './assets/MeatAsilomar.jpeg';
import img3 from './assets/grad.jpg';
import img4 from './assets/meatcornell.jpg';
import uofrLogo from './assets/UofR_logo.svg';

const photos = [img1, img2, img3, img4];

function HoverPhoto() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, []);

  const startCycle = useCallback(() => {
    startRef.current = Date.now();
    setProgress(0);
    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const p = Math.min((elapsed / 3000) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setIndex(i => (i + 1) % photos.length);
        setProgress(0);
        startRef.current = Date.now();
        intervalRef.current = window.setInterval(() => {
          const el = Date.now() - startRef.current;
          const pp = Math.min((el / 3000) * 100, 100);
          setProgress(pp);
          if (pp >= 100) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            setIndex(i => (i + 1) % photos.length);
            startCycle();
          }
        }, 30);
      }
    }, 30);
  }, []);

  const handleMouseEnter = () => {
    setHovering(true);
    setProgress(0);
    startCycle();
  };

  const handleMouseLeave = () => {
    clearTimer();
    setProgress(0);
    setHovering(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ maxWidth: '400px', margin: '0 auto', cursor: 'pointer' }}
    >
      <Box
        component="img"
        src={photos[index]}
        alt="Hamed Ajorlou"
        sx={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 2,
          opacity: hovering ? 1 : 0,
          transition: 'opacity 0.3s ease',
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#222',
            transition: 'none',
          },
        }}
      />
    </Box>
  );
}

type Series = {
  slug: string;
  title: string;
  photos: { src: string; caption: string }[];
};

const gallerySeries: Series[] = [
  {
    slug: 'spring-uofr-2026',
    title: 'Arrival of Spring at University of Rochester River Campus — April 2026',
    photos: [
      { src: '/gallery/spring-uofr-2026/1B579833-522D-4EB3-AAF5-CDAC86FA57F1.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/456D69DC-C0C7-428B-A4E6-29E6E58686EC.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/4F523043-1318-4F7A-BC40-22E8D7B0088B.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/86111BCD-F086-4DDE-B611-CB8F2191F193.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/86F01118-04DF-46D9-AAE4-7F127B7554AD.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/9F90475D-0680-4F7C-AA87-6AD3165B3239.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/C8237622-DC5C-48C4-ADB2-5EBC94A8C9B0.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/171915B8-8248-4978-AF90-0DA6EAF851A7.jpeg', caption: '' },
      { src: '/gallery/spring-uofr-2026/4AACF766-EEFC-43C8-B825-FDFFC5407C14.jpeg', caption: '' },
    ],
  },
];

function Nav() {
  return (
    <Box sx={{ fontFamily: '"EB Garamond", Georgia, serif', textAlign: 'center', pt: 3, fontSize: '1.1rem' }}>
      <Link component={RouterLink} to="/" sx={{ color: 'inherit', mx: 1.5 }}>Home</Link>
      <span style={{ color: '#888' }}>·</span>
      <Link component={RouterLink} to="/gallery" sx={{ color: 'inherit', mx: 1.5 }}>Gallery</Link>
    </Box>
  );
}

function SeriesPreview({ series }: { series: Series }) {
  const previews = series.photos.slice(0, 3);
  return (
    <Link component={RouterLink} to={`/gallery/${series.slug}`} sx={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <Box sx={{ '&:hover .stack-img': { transform: 'translateY(-4px)' } }}>
        <Box sx={{ position: 'relative', height: '320px', mb: 2 }}>
          {previews.map((photo, i) => (
            <Box
              key={i}
              className="stack-img"
              component="img"
              src={photo.src}
              alt=""
              sx={{
                position: 'absolute',
                top: `${i * 12}px`,
                left: `${i * 12}px`,
                right: `${(previews.length - 1 - i) * 12}px`,
                height: '280px',
                objectFit: 'cover',
                boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
                border: '4px solid #fff',
                transition: 'transform 0.3s ease',
                zIndex: i,
              }}
            />
          ))}
        </Box>
        <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', textAlign: 'center', mt: 2, fontStyle: 'italic' }}>
          {series.title}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: '"EB Garamond", Georgia, serif', textAlign: 'center', color: 'text.secondary' }}>
          {series.photos.length} photo{series.photos.length === 1 ? '' : 's'}
        </Typography>
      </Box>
    </Link>
  );
}

function Gallery() {
  return (
    <Container maxWidth="lg" sx={{ pt: 3, pb: 5, fontFamily: '"EB Garamond", Georgia, serif' }}>
      <Typography variant="h4" component="h1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700, textAlign: 'center', mb: 1 }}>
        Gallery
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', textAlign: 'center', color: 'text.secondary', mb: 5 }}>
        A small collection from my film photography, organized by series.
      </Typography>
      <Grid container spacing={5}>
        {gallerySeries.map(series => (
          <Grid item xs={12} sm={6} md={4} key={series.slug}>
            <SeriesPreview series={series} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function SeriesView() {
  const { slug } = useParams<{ slug: string }>();
  const [open, setOpen] = useState<number | null>(null);
  const series = gallerySeries.find(s => s.slug === slug);

  if (!series) {
    return (
      <Container maxWidth="md" sx={{ pt: 3, pb: 5, fontFamily: '"EB Garamond", Georgia, serif', textAlign: 'center' }}>
        <Typography variant="body1">Series not found.</Typography>
        <Link component={RouterLink} to="/gallery" sx={{ color: 'inherit' }}>← Back to Gallery</Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 3, pb: 5, fontFamily: '"EB Garamond", Georgia, serif' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Link component={RouterLink} to="/gallery" sx={{ fontFamily: '"EB Garamond", Georgia, serif', color: 'inherit', fontStyle: 'italic' }}>
          ← Back to Gallery
        </Link>
        <Typography variant="h5" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700, mt: 2 }}>
          {series.title}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {series.photos.map((photo, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              onClick={() => setOpen(i)}
              sx={{
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover img': { opacity: 0.85 },
              }}
            >
              <Box
                component="img"
                src={photo.src}
                alt={`Photograph ${i + 1}`}
                sx={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'opacity 0.3s ease',
                }}
              />
              {photo.caption && (
                <Typography variant="body2" sx={{ fontFamily: '"EB Garamond", Georgia, serif', mt: 1, color: 'text.secondary', fontStyle: 'italic' }}>
                  {photo.caption}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Modal open={open !== null} onClose={() => setOpen(null)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          onClick={() => setOpen(null)}
          sx={{
            outline: 'none',
            maxWidth: '95vw',
            maxHeight: '95vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {open !== null && (
            <>
              <Box
                component="img"
                src={series.photos[open].src}
                alt=""
                sx={{ maxWidth: '95vw', maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
              />
              {series.photos[open].caption && (
                <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', color: '#fff', mt: 2, fontStyle: 'italic' }}>
                  {series.photos[open].caption}
                </Typography>
              )}
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

function Home() {
  return (
    <Container maxWidth="md" sx={{ pt: 3, pb: 5, fontFamily: '"EB Garamond", Georgia, serif' }}>
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
            Here is my (probably outdated) <Link href="/CV.pdf" target="_blank" sx={{ color: 'inherit' }}>CV</Link>.
          </Typography>

          <Typography variant="h6" sx={{ fontFamily: '"EB Garamond", Georgia, serif', fontWeight: 700, mt: 3, mb: 1 }}>
            Research Interests
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }} paragraph>
            My interests lie in Graph Neural Networks, Causal Structure Learning, Topology Inference, and Optimization. My work addresses several questions:
          </Typography>
          <Box component="ul" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 2, pl: 3, mt: 0, '& li': { mb: 0.5 } }}>
            <Typography component="li" variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              How can we learn causal graph structure from streaming observational data? [<em>IEEE TSP 2026</em>]
            </Typography>
            <Typography component="li" variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              What roles do noise adaptivity, sparsity, and non-negativity play in DAG learning? [<em>IEEE SPM 2026</em>]
            </Typography>
            <Typography component="li" variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              How can we efficiently recover causal orderings from the precision matrix? [<em>ICASSP 2026</em>]
            </Typography>
            <Typography component="li" variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              How should we design graph convolutions that respect the directed, acyclic nature of causal graphs? [<em>IEEE TSP 2025</em>] [<em>NeurIPS Workshop 2025</em>]
            </Typography>
            <Typography component="li" variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              How can we estimate network homophily from partial observations using statistical sampling? [<em>Asilomar 2025</em>]
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontFamily: '"EB Garamond", Georgia, serif', lineHeight: 1.8 }} paragraph>
            An ongoing research direction is how the learned causal connectivity can be utilized for downstream tasks with bounded generalization error.
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
          <Link href="https://www.rochester.edu" target="_blank" sx={{ display: 'block', textAlign: 'center', mb: 2 }}>
            <Box
              component="img"
              src={uofrLogo}
              alt="University of Rochester"
              sx={{
                width: '120px',
                height: 'auto',
                display: 'inline-block',
              }}
            />
          </Link>
          <HoverPhoto />
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
          </Stack>
          <Typography variant="body2" sx={{ fontFamily: '"EB Garamond", Georgia, serif', textAlign: 'center', mt: 2, lineHeight: 1.6, color: 'text.secondary' }}>
            University of Rochester<br />
            701 Computer Studies Building<br />
            Rochester, NY 14627
          </Typography>
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

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<SeriesView />} />
      </Routes>
    </Router>
  );
}

export default App;
