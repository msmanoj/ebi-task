import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

const FormTab = ({ selectedTask, selectTask }) => {
  return (
    <Grid item md={12}>
      <Paper>
        <Tabs
          value={selectedTask}
          onChange={selectTask}
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
};

FormTab.propTypes = {
  classes: PropTypes.object,
  selectedTask: PropTypes.number
};

export default FormTab;
