import { shallow } from "enzyme";
import React from "react";

it("renders without crashing", () => {
  shallow(<h1>App Header test</h1>);
});