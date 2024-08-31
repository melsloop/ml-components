import React from "react";
import { render } from "@testing-library/react";
import ToggleGroup from "../ToggleGroup";

describe("ToggleGroup", () => {
  test("renders the Toggle Group component", () => {
    render(<ToggleGroup
				type="single"
				defaultValue="1"
			>
				<span data-value="1">Item 1</span>
				<span data-value="2">Item 2</span>
				<span data-value="3">Item 3</span>
			</ToggleGroup>);
  });
});
