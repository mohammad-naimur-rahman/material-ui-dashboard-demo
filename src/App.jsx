import { createTheme, Grid, makeStyles } from "@material-ui/core";
import { useMemo } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#0A7680'
          }
        },
      }),
    [],
  );
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </ThemeProvider>
  );
};

export default App;
