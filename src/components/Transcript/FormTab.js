import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class FormTab extends Component {
  render() {
    return (
      <Grid item md={12}>
        <Paper>
          <Tabs
            value={this.props.selectedTask}
            onChange={this.props.selectTask}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Transcripts by Gene" />
            <Tab label="Transcripts by HGVS" />
          </Tabs>
        </Paper>
      </Grid>
    );
  }
}

export default FormTab;
