import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function MediaCard(props) {
    var cardStyle = {
        // display: 'block',
        // width: '100%',
        // transitionDuration: '0.3s',
        height: '100%'
    }
  return (
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        image={`/assets/login-illustration-mahisadd.jpg`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Best intractive and responsive login page for website
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary">Share</Button>
        <Button size="small" variant="contained" color="neutral">Live Demo</Button>
      </CardActions>
    </Card>
  );
}