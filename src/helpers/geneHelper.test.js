import { isGeneFormValid } from "./geneHelper";

describe("Testing isGeneFormValid helper function", () => {
  it("should return false if all fields are empty", () => {
    expect(
      isGeneFormValid({
        geneSymbol: "",
        sequencePosition: "",
        aminoAcid: ""
      })
    ).toBe(false);
  });

  it("should return false if one of fields is empty", () => {
    expect(
      isGeneFormValid({
        geneSymbol: "brca2",
        sequencePosition: "1",
        aminoAcid: ""
      })
    ).toBe(false);
  });

  it("should return true all the fields are filled", () => {
    expect(
      isGeneFormValid({
        geneSymbol: "brca2",
        sequencePosition: "1",
        aminoAcid: "M"
      })
    ).toBe(true);
  });
});
