import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const styles = () => ({
  textField: {
    width: "100%"
  },
  textFieldLast: {
    width: "100%"
  }
});

class GeneForm extends Component {
  constructor(props) {
    super(props);

    // Initial state of this component
    this.state = {
      geneSymbol: "",
      sequencePosition: "",
      aminoAcid: ""
    };
  }

  updateGeneForm = () => {
    // Pass the current state values to the Gene componenst to send the API request
    this.props.onChange(this.state);
  };

  geneFormChanged = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.updateGeneForm();
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} md={12}>
        <Grid container spacing={16}>
          <Grid item md={4} xs={12}>
            <TextField
              id="geneSymbol"
              label="Gene Symbol"
              onChange={this.geneFormChanged}
              className={classes.textField}
              margin="normal"
              name="geneSymbol"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              id="sequencePosition"
              label="Sequence Position"
              type="number"
              onChange={this.geneFormChanged}
              className={classes.textField}
              margin="normal"
              name="sequencePosition"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              id="aminoAcid"
              label="Amino Acid"
              onChange={this.geneFormChanged}
              className={classes.textFieldLast}
              margin="normal"
              name="aminoAcid"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GeneForm.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func
};

export default withStyles(styles)(GeneForm);
