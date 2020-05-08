import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo.jsx";
import NavigationLink from "./NavigationLink.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles(() => ({
  posLink: {
    display: "flex",
  },
  navSpace: {
    justifyContent: "space-between",
  },
}));

const Header = ({ name, propos, realisation, contact, service }) => {
  const classes = useStyles();
  return (
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.navSpace}>
          <Logo name={name} />
          <Box className={classes.posLink}>
            <NavigationLink info={propos} />
            <NavigationLink info={realisation} />
            <NavigationLink info={service} />
            <NavigationLink info={contact} />
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
