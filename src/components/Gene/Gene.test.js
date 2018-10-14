import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Gene from "./Gene";
import GeneForm from "./GeneForm";

Enzyme.configure({ adapter: new Adapter() });

describe(" Rendering Gene", () => {
  it("should render", () => {
    const wrapper = shallow(<Gene />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("Rendering GeneForm", () => {
  it("should render", () => {
    const wrapper = shallow(<GeneForm />);
    expect(wrapper).toHaveLength(1);
  });
});
