import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1. Add details about technologies used and your role.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2. Add details about technologies used and your role.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of project 3. Add details about technologies used and your role.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          My Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={project.link} target="_blank">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 