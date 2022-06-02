import { Button, Container, makeStyles } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Button className={classes.text}>Homepage</Button>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Button className={classes.text}>Friends</Button>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Button className={classes.text}>Lists</Button>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Button className={classes.text}>Camera</Button>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Button className={classes.text}>Videos</Button>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Button className={classes.text}>Apps</Button>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Button className={classes.text}>Collections</Button>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Button className={classes.text}>Market Place</Button>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Button className={classes.text}>Settings</Button>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Button className={classes.text}>Logout</Button>
      </div>
    </Container>
  );
};

export default Leftbar;
