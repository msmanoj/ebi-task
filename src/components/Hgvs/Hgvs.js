import React, { Component } from "react";
import HgvsForm from "./HgvsForm";
import Progress from "components/shared/Progress";
import ResultList from "components/shared/ResultList";
import { serialiseHgvsNotation, isHgvsNotationValid } from "helpers/hgvsHelper";
import { Grid } from "@material-ui/core";
import { hgvsApiRequest } from "services/api";

class Hgvs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      transcripts: []
    };
  }

  processHgvs = hgvsNotation => {
    if (!isHgvsNotationValid(hgvsNotation)) {
      this.setState({ transcripts: [] });
      return;
    }

    const serialisedHgvsNotation = serialiseHgvsNotation(hgvsNotation);

    this.setState({ isLoading: true });
    const result = hgvsApiRequest(serialisedHgvsNotation);
    result.then(value => {
      this.setState({ transcripts: value, isLoading: false });
    });
  };

  updateHgvsNotation = newHgvsNotation => {
    this.processHgvs(newHgvsNotation);
  };

  render() {
    return (
      <React.Fragment>
        <HgvsForm updateHgvsNotation={this.updateHgvsNotation} />

        {this.state.isLoading && <Progress loadingText="Loading HGVS..." />}

        <Grid item xs={12} md={12}>
          {!this.state.isLoading && (
            <ResultList transcripts={this.state.transcripts} />
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Hgvs;
