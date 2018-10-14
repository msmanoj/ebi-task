import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#555",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const styles = () => ({
  tableRow: {
    "&:hover": {
      backgroundColor: "#eee"
    }
  }
});

const ResultList = ({ transcripts, classes }) => (
  <React.Fragment>
    <Table style={{ display: transcripts.length ? "" : "none" }}>
      <TableHead>
        <TableRow>
          <CustomTableCell>Stable ID</CustomTableCell>
          <CustomTableCell>Molecule</CustomTableCell>
          <CustomTableCell>Version</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transcripts.map(transcript => {
          return (
            <TableRow key={transcript.id} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                <a
                  href={"http://www.ensembl.org/id/" + transcript.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {transcript.id}
                </a>
              </TableCell>
              <TableCell>{transcript.molecule}</TableCell>
              <TableCell>{transcript.version}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

    <Grid
      container
      style={{
        display: transcripts.length ? "none" : ""
      }}
    >
      No results found.
    </Grid>
  </React.Fragment>
);

ResultList.propTypes = {
  transcripts: PropTypes.array,
  classes: PropTypes.object
};

export default withStyles(styles)(ResultList);
