import React , { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo.jsx";
import NavigationLink from "./NavigationLink.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import MenuHamburger from "./MenuHamburger.jsx";
import SlideMobile from './SlideMobile.jsx'


const useStyles = makeStyles(() => ({
  posLink: {
    display: "flex",
  },
  navSpace: {
    justifyContent: "space-between",
    paddingLeft: 0,
  },
}));


const Header = ({ name, propos, realisation, contact, service }) => {
  const [open, setOpen] = useState(false)
    const handleChange = () => {
      setOpen(!open)
    } 
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className={classes.navSpace}>
        <Logo name={name} />
        <Hidden only="xs">
          <Box className={classes.posLink}>
            <NavigationLink info={propos} />
            <NavigationLink info={realisation} />
            <NavigationLink info={service} />
            <NavigationLink info={contact} />
          </Box>
        </Hidden>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <MenuHamburger open={open} setOpen={handleChange}/>
          <SlideMobile open={open} info={[propos, realisation, contact, service]}/>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
