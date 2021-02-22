import { shallow } from "enzyme";
import React from "react";
import AppHeader from "../src/app/Layout/appHeader";

it("renders without crashing", () => {
  shallow(<AppHeader />);
});