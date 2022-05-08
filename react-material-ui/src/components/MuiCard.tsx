import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash"
        />
        <CardContent>
          <Typography variant="h5" component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components. It is maintained by
            Meta and a community of individual developers and companies.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
