import React, { Component } from "react";
import HgvsForm from "./HgvsForm";
import Progress from "components/shared/Progress";
import ResultList from "components/shared/ResultList";
import { serialiseHgvsNotation, isHgvsNotationValid } from "./Hgvs.helper";
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

    result.then(transcripts => {
      const position = serialisedHgvsNotation.position;
      const aminoAcid = serialisedHgvsNotation.aminoAcid;

      const proteinTranscripts = transcripts.filter(
        item => item.seq[position - 1] === aminoAcid
      );
      this.setState({ transcripts: proteinTranscripts, isLoading: false });
    });
  };

  render() {
    return (
      <React.Fragment>
        <HgvsForm onUpdate={this.processHgvs} />

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
