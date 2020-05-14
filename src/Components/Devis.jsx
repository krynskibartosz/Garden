import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  espace: {
    marginTop: "8em",
    zIndex : "-1",
  },
}));

const Devis = () => {
  const classes = useStyles();
  return (
    <Button
      className={classes.espace}
      color="primary"
      variant="outlined"
      size="large"
    >
      Demandez un devis !
    </Button>
  );
};

export default Devis;
