import { Typography, Paper, Box, Link } from '@mui/material';

const Contact = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Contact
      </Typography>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Typography variant="body1" paragraph>
          Feel free to reach out to me through any of the following channels:
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" paragraph>
            <strong>Email:</strong>{' '}
            <Link href="mailto:hajorlou@ur.rochester.edu">
              hajorlou@ur.rochester.edu
            </Link>
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Office:</strong> University of Rochester, Department of Electrical and Computer Engineering
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>GitHub:</strong>{' '}
            <Link href="https://github.com/hamedajorlou" target="_blank">
              github.com/hamedajorlou
            </Link>
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>LinkedIn:</strong>{' '}
            <Link href="https://www.linkedin.com/in/hamed-ajorlou/" target="_blank">
              linkedin.com/in/hamed-ajorlou
            </Link>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Contact; 