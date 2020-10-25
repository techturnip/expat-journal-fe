import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import PostCard from "../components/PostCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home({ posts }) {
  const classes = useStyles();

  const renderPosts = () => {
    if (posts) {
      return posts.map((post) => {
        return (
          <Grid key={post.id}>
            <PostCard post={post} />
          </Grid>
        );
      });
    }
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {renderPosts()}
      </Grid>
    </div>
  );
}
