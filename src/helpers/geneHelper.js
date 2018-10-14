export const isGeneFormValid = ({
  geneSymbol,
  sequencePosition,
  aminoAcid
}) => {
  // MAke sure the required data is not empty
  if (geneSymbol === "" || sequencePosition === "" || aminoAcid === "") {
    return false;
  }

  return true;
};
