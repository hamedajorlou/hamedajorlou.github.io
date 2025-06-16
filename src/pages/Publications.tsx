import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const Publications = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Publications
      </Typography>
      <Paper elevation={0} sx={{ p: 3 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Graph Neural Networks for Optimization"
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    Journal of Machine Learning Research, 2023
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    H. Ajorlou, G. Mateos
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Large-Scale Graph Processing with GNNs"
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    IEEE Transactions on Neural Networks, 2022
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    H. Ajorlou, G. Mateos
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default Publications; 