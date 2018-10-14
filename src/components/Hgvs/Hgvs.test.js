import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Hgvs from "./Hgvs";
import HgvsForm from "./HgvsForm";

Enzyme.configure({ adapter: new Adapter() });

describe("Rendering Hgvs", () => {
  it("should render", () => {
    const wrapper = shallow(<Hgvs />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("Rendering HgvsForm", () => {
  it("should render", () => {
    const wrapper = shallow(<HgvsForm />);
    expect(wrapper).toHaveLength(1);
  });
});
