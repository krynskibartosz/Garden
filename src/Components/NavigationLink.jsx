import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textPad: {
    paddingLeft: "2em",
  },
}));

const NavigationLink = ({ info }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.textPad}>
      <Link
        color="primary"
        underline="none"
        href="#"
        onClick={e => e.preventDefault}
      >
        {info}
      </Link>
    </Typography>
  );
};
export default NavigationLink;
