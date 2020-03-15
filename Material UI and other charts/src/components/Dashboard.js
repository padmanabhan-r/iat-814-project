import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Dashboard = () => (
  <Grid
    container
    spacing={3}
    style={{
      padding: 15
    }}
    justify="space-around"
    alignItems="flex-start"
  >
    <ButtonGroup style={{ padding: "5px 5px 0 5px" }} color="primary" size="large">
      {["Turnaround Summary", "Cleaners", "Porters", "Bed Availability and Status"].map(value => (
        <Button size="medium" color="primary">
          {value}
        </Button>
      ))}
    </ButtonGroup>
  </Grid>

);

export default Dashboard;
