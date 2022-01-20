import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">MEMORIES</Typography>
        <img src={memories} alt="memories" height="60" />
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








