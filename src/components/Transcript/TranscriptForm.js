import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormTab from "./FormTab";
import HeroContent from "./HeroContent";
import Gene from "../Gene/Gene";
import Hgvs from "../Hgvs/Hgvs";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "20px;",
    marginTop: "20px",
    minHeight: "600px",
    boxShadow: "0px 1px 4px #ccc"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class TranscriptForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTask: 0
    };
  }
  changeTask = (e, index) => {
    this.setState({ selectedTask: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <HeroContent />
        {process.env.PROTEIN_SEQUENCE_ENDPOINT_URL}
        <Grid container className={classes.formHolder}>
          <FormTab
            selectTask={this.changeTask}
            selectedTask={this.state.selectedTask}
          />

          <Grid
            item
            xs={12}
            md={12}
            style={{ display: this.state.selectedTask === 0 ? "" : "none" }}
          >
            <Gene />
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ display: this.state.selectedTask === 1 ? "" : "none" }}
          >
            <Hgvs />
          </Grid>
        </Grid>
      </div>
    );
  }
}

TranscriptForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TranscriptForm);
