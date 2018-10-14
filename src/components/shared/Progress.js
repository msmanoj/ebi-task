import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Progress = ({ classes, loadingText }) => {
  return (
    <Grid container justify="center" alignItems="center">
      <CircularProgress className={classes.progress} size={50} />
      <Grid>{loadingText}</Grid>
    </Grid>
  );
};

Progress.propTypes = {
  classes: PropTypes.object,
  loadingText: PropTypes.string
};

export default withStyles(styles)(Progress);
