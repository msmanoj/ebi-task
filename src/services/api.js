import axios from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const getRequestCreator = () => {
  let request;
  return url => {
    // Cancel the previous request
    if (request) {
      request.cancel();
    }
    request = axios.CancelToken.source();
    return axios.get(url, {
      cancelToken: request.token
    });
  };
};

const sendGetRequest = getRequestCreator();
const getRequestDebounced = AwesomeDebouncePromise(sendGetRequest, 500);

const getTranscripts = async (stableID, sequenceType) => {
  try {
    const proteinSequenceURL = process.env.REACT_APP_SEQUENCE_ENDPOINT_URL.replace(
      ":id",
      stableID
    ).replace(":type", sequenceType);

    // Get the actual amino acid for the given position
    const request = await getRequestDebounced(proteinSequenceURL, 500);
    return request.data;
  } catch (error) {
    return [];
  }
};

export const hgvsApiRequest = async ({ stableID, sequenceType }) => {
  return getTranscripts(stableID, sequenceType);
};

export const geneApiRequest = async ({ geneSymbol }) => {
  // Get the transcripts
  const symbolTranscriptsEndpointURL = process.env.REACT_APP_SYMBOL_TRANSCRIPTS_ENDPOINT_URL.replace(
    ":symbol",
    geneSymbol
  );

  let geneInfo;

  try {
    let request = await getRequestDebounced(symbolTranscriptsEndpointURL, 500);
    geneInfo = request.data;
  } catch (error) {
    // If there was any erro retrieving the gene info, return an empty array
    return [];
  }
  return getTranscripts(geneInfo.id, "protein");
};
