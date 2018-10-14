const aminoAcidCodes = {
  Ala: "A",
  Cys: "C",
  Asp: "D",
  Glu: "E",
  Phe: "F",
  Gly: "G",
  His: "H",
  Ile: "I",
  Lys: "K",
  Leu: "L",
  Met: "M",
  Asn: "N",
  Pro: "P",
  Gln: "Q",
  Arg: "R",
  Ser: "S",
  Thr: "T",
  Val: "V",
  Trp: "W",
  Tyr: "Y"
};

export const isHgvsNotationValid = hgvsNotation => {
  const stableIDRegex = "((?:[a-z][a-z]*[0-9]+[a-z0-9]*))"; // Match the Stable ID
  const versionRegex = "(\\.\\d)?"; // Match the optional version
  const colonRegex = "(:)"; // Match the literal ':'
  const prefixRegex = "([gcp])"; // Match the prefix
  const literalDotRegex = "(\\.)"; // Match the literal '.' before the substitution
  const aminoAcidRegex = "((?:[a-z][a-z]+))"; // Match the amino acid
  const positionRegex = "(\\d+)"; // Match the position

  const hgvsValidatorRegex = new RegExp(
    stableIDRegex +
      versionRegex +
      colonRegex +
      prefixRegex +
      literalDotRegex +
      aminoAcidRegex +
      positionRegex +
      aminoAcidRegex,
    ["i"] // Case insensitive
  );

  return hgvsValidatorRegex.test(hgvsNotation);
};

export const serialiseHgvsNotation = hgvsNotation => {
  hgvsNotation = hgvsNotation.split(":");

  let stableID = hgvsNotation[0].split(".")[0];
  let prefix = hgvsNotation[1].split(".")[0];
  let substituiton = hgvsNotation[1].split(".")[1];
  let position = substituiton.match(/\d+/g);
  let aminoAcidSubstitution = substituiton.match(/[a-zA-Z]+/g);
  let aminoAcid = aminoAcidSubstitution[0];

  // Convert the 3-Letter Amino acit to Single Letter
  aminoAcid = aminoAcidCodes[aminoAcid];

  const sequenceTypes = {
    p: "protein",
    g: "genomic",
    c: "coding"
  };

  const sequenceType = sequenceTypes[prefix];

  return {
    stableID,
    position,
    sequenceType,
    aminoAcid
  };
};
