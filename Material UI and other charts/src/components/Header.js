import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => (
  <AppBar position="static" style={{ background: '#2E3B55' }}> 
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Optimization of Bed Turnaround Process in a Hospital using Resource Visualization
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
