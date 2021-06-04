import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";



export default function Footer() {
    return (
        <AppBar position="relative" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2019 Expeditions
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    );
}
