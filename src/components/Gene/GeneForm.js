import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

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
    this.state = {
      geneSymbol: "",
      sequencePosition: "",
      aminoAcid: ""
    };
  }

  updateGeneForm = () => {
    this.props.updateGeneForm(this.state);
  };

  geneFormChanged = e => {
    e.persist();

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
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GeneForm);
