import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 5}px`
  }
});

const HeroContent = ({ classes }) => (
  <Grid className={classes.heroContent}>
    <Typography
      variant="display3"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      Transcripts
    </Typography>
  </Grid>
);

HeroContent.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HeroContent);
