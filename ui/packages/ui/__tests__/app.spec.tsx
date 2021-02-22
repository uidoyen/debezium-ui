import { shallow } from "enzyme";
import React from "react";
import App from "../src/app/app";

it("renders without crashing", () => {
  shallow(<App />);
});