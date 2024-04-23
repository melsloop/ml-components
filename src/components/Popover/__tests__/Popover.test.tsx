import React from "react";
import { render } from "@testing-library/react";
import Popover from "../../Popover";

describe("Popover", () => {
  test("renders the Popover component", () => {
    render(<Popover
				trigger='Trigger'
				locale='en'
				side='right'
			>
				Content
			</Popover>);
  });
});
