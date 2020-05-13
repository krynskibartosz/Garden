import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header.jsx";
import Devis from "./Components/Devis.jsx";
import Title from "./Components/Title.jsx";
import { makeStyles } from "@material-ui/core";
import MediaCart from "./Components/Test.jsx";
import Video from "./Components/Video.jsx";

const useStyles = makeStyles(() => ({
  main: {
    height: "100vh",
  },
  devisCenter: {
    alignItems: "center",
    marginTop: "1em",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <main>
      <section>
        <Grid container direction="column" className={classes.main}>
          <Grid item>
            <Video />
            <Header
              name="Hubert Krynski"
              service="Services"
              propos="à propos"
              realisation="Réalisation"
              contact="Contact"
            />
          </Grid>

          <Grid container direction="column" className={classes.devisCenter}>
            <Grid item>
              <Title description="The best solution for your garden" />
            </Grid>
            <Grid item>
              <Devis />
            </Grid>
          </Grid>
        </Grid>
      </section>

      <section>
        <Grid container>
          <Grid item>
            {"There'll be our second content"}
            <MediaCart />
          </Grid>
        </Grid>
      </section>
    </main>
  );
};

export default App;
