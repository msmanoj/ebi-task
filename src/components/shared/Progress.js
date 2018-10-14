import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Progress extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" alignItems="center">
        <CircularProgress className={classes.progress} size={50} />
        <Grid>{this.props.loadingText}</Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Progress);
