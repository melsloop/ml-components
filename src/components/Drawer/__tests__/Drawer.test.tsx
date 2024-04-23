import React from "react";
import { render } from "@testing-library/react";
import Drawer from "../Drawer";

describe("Drawer", () => {
  test("renders the Drawer component", () => {
    render(<Drawer direction="right" open={true}>Content</Drawer>);
  });
});
