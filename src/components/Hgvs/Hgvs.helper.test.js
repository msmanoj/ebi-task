import { isHgvsNotationValid } from "./Hgvs.helper";

describe("Testing isHgvsNotationValid helper function ", () => {
  it("should return false if empty value is passed", () => {
    expect(isHgvsNotationValid("")).toBe(false);
  });

  it("should return true for the value 'ENSP00000419060.2:p.Val600Glu' ", () => {
    expect(isHgvsNotationValid("ENSP00000419060.2:p.Val600Glu")).toBe(true);
  });
});
