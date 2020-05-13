import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  text: {
    textAlign: "center",
  },
}));

const Title = ({ description }) => {
  const classes = useStyles();

  return (
    <Typography color="primary" variant="h3" className={classes.text}>
      {description}
    </Typography>
  );
};

export default Title;
