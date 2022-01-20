// IMPORTING THE REACT LIBRARY
import React from "react";
// IMPORTING COMPONENTS FROM MATERIAL-UI
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// IMPORTING COMPONENTS 
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import memories from "./images/memories.png";
import useStyles from "./styles";


const App = () => {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">MEMORIES</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container maxwidth="lg">
          <Grid container justify="space-between" spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={7} md={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;






