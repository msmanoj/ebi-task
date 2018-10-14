import React, { Component } from "react";
import Header from "./Header";
import TranscriptForm from "./Transcript/TranscriptForm";
import "./App.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    },
    backgroundColor: "#ccc"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <main className={classes.layout}>
          <TranscriptForm />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
