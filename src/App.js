import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header.jsx";
import video from "./assets/professional-gardening-services-in-london-fantastic-gardeners_xiJZxU80_SD8X.mp4";
import Devis from './Components/Devis.jsx';
import { makeStyles } from '@material-ui/core';
import MediaCart from './Components/Test.jsx'

const useStyles = makeStyles(() => ({ 
  main : {
    height: "100vh",
  },
  devisCenter : {
    height: "80vh",
    alignItems : "center",
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <main>
  <section>

    <Grid  container direction="column" className={classes.main} >
    <video 
    autoPlay 
    muted 
    loop
    style={{
      position: "absolute",
      width: "100%",
      height : "100vh",
      objectFit : "cover",
      zIndex : "-1"
    }}
    >
    <track kind="caption" />
      <source src={video} type="video/mp4"/>
    </video>
      <Grid item>
      
        <Header
          name="Hubert Krynski"
          service="Services"
          propos="à propos"
          realisation="Réalisation"
          contact="Contact"
        />
      </Grid>

    <Grid container direction="column" className={classes.devisCenter}>
      <Grid item sm={5}/>
      <Grid item sm={2}>
          <Devis/>
      </Grid>
    </Grid>
    <Grid item sm={5}/>
    </Grid>

  </section>

    <section>
    <Grid container>
      <Grid item>
        {"There'll be our second content"}
        <MediaCart/>
      </Grid>
    </Grid>
    </section>
    </main>
  );
};

export default App;
