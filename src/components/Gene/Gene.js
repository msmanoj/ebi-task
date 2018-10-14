import React, { Component } from "react";
import GeneForm from "./GeneForm";
import Progress from "components/shared/Progress";
import ResultList from "components/shared/ResultList";
import { Grid } from "@material-ui/core";
import { isGeneFormValid } from "helpers/geneHelper";
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

    this.setState({ isLoading: true });

    const result = geneApiRequest(geneFormData);

    result.then(value => {
      this.setState({ transcripts: value, isLoading: false });
    });
  };

  updateGeneForm = geneFormData => {
    this.processGene(geneFormData);
  };

  render() {
    return (
      <React.Fragment>
        <GeneForm updateGeneForm={this.updateGeneForm} />

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
