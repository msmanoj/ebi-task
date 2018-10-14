export const isGeneFormValid = ({
  geneSymbol,
  sequencePosition,
  aminoAcid
}) => {
  // Return false if any of the form fields are empty
  if (!geneSymbol || !sequencePosition || !aminoAcid) {
    return false;
  }

  return true;
};
