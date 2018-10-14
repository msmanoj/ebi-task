import axios from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const getRequestCreator = () => {
  let call;
  return url => {
    // Cancel the previous request
    if (call) {
      call.cancel();
    }
    call = axios.CancelToken.source();
    return axios.get(url, {
      cancelToken: call.token
    });
  };
};
const sendGetRequest = getRequestCreator();
const getRequestDebounced = AwesomeDebouncePromise(sendGetRequest, 500);

export const hgvsApiRequest = async ({
  stableID,
  sequenceType,
  position,
  aminoAcid,
  source // TODO: cancel request
}) => {
  try {
    const proteinSequenceURL = process.env.REACT_APP_SEQUENCE_ENDPOINT_URL.replace(
      ":id",
      stableID
    ).replace(":type", sequenceType);

    // Get the actual amino acid for the given position
    const request = await getRequestDebounced(proteinSequenceURL, 500);
    const proteinTranscripts = request.data;

    return proteinTranscripts.filter(
      item => item.seq[position - 1] === aminoAcid
    );
  } catch (error) {
    return [];
  }
};

export const geneApiRequest = async (
  { geneSymbol, sequencePosition, aminoAcid },
  source
) => {
  // Get the transcripts
  const symbolTranscriptsEndpointURL = process.env.REACT_APP_SYMBOL_TRANSCRIPTS_ENDPOINT_URL.replace(
    ":symbol",
    geneSymbol
  );

  try {
    let request = await getRequestDebounced(symbolTranscriptsEndpointURL, 500);
    const geneInfo = request.data;

    // Get the endpoint URL from env
    let proteinSequenceURL = process.env.REACT_APP_SEQUENCE_ENDPOINT_URL.replace(
      ":id",
      geneInfo.id
    ).replace(":type", "protein");

    // Get the actual amino acid for the given position
    request = await getRequestDebounced(proteinSequenceURL, 500);
    const proteinTranscripts = request.data;

    aminoAcid = aminoAcid.toUpperCase();
    // Check if the actual amino acid value matches with the one user has entered
    return proteinTranscripts.filter(
      transcript => transcript.seq[sequencePosition - 1] === aminoAcid
    );
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error(`Cancelling previous request: ${error.message}`);
    }
    return [];
  }
};
