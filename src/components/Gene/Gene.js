import React, { Component } from "react";
import GeneForm from "./GeneForm";
import Progress from "components/shared/Progress";
import ResultList from "components/shared/ResultList";
import { Grid } from "@material-ui/core";
import { isGeneFormValid } from "./Gene.helper";
import { geneApiRequest } from "services/api";

class Gene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      transcripts: []
    };
  }

  processGene = geneFormData => {
    if (!isGeneFormValid(geneFormData)) {
      this.setState({ transcripts: [] });
      return;
    }

    // show the loading animation
    this.setState({ isLoading: true });

    // send a request to the rest API to get the transcripts
    const result = geneApiRequest(geneFormData);

    result.then(transcripts => {
      const aminoAcid = geneFormData.aminoAcid.toUpperCase();
      const sequencePosition = geneFormData.sequencePosition;

      // Check if the actual amino acid value matches with the one user has entered
      const proteinTranscripts = transcripts.filter(
        transcript => transcript.seq[sequencePosition - 1] === aminoAcid
      );

      // display the transcripts to the user and hide the loading progress
      this.setState({ transcripts: proteinTranscripts, isLoading: false });
    });
  };

  render() {
    return (
      <React.Fragment>
        <GeneForm onChange={this.processGene} />

        {this.state.isLoading && (
          <Progress loadingText="Loading Transcripts..." />
        )}

        <Grid item xs={12} md={12}>
          {!this.state.isLoading && (
            <ResultList transcripts={this.state.transcripts} />
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Gene;
