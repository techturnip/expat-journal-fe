import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Expat Journal
          </Typography>
          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/signin")} color="inherit">
            About
          </Button>
          <Button onClick={() => navigate("/signin")} color="inherit">
            Login
          </Button>
          <Button onClick={() => navigate("/signup")} color="inherit">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
