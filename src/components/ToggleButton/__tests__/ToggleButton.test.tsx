import React from "react";
import { render } from "@testing-library/react";
import ToggleButton from "../ToggleButton";

describe("ToggleButton", () => {
  test("renders the Toggle Button component", () => {
    render(<ToggleButton title="Toggle" isToggled={false} />);
  });
});
