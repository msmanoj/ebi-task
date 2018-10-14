import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TranscriptForm from "components/Transcript/TranscriptForm";
import FormTab from "./FormTab";
import HeroContent from "./HeroContent";

Enzyme.configure({ adapter: new Adapter() });

describe("Rendering the TranscriptForm", () => {
  it("should render", () => {
    const wrapper = shallow(<TranscriptForm />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("Rendering the FormTab", () => {
  it("should render", () => {
    const wrapper = shallow(<FormTab />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("Rendering the HeroContent", () => {
  it("should render", () => {
    const wrapper = shallow(<HeroContent />);
    expect(wrapper).toHaveLength(1);
  });
});
