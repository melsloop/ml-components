import React from "react";
import { render } from "@testing-library/react";
import LoadingIndicator from "../LoadingIndicator";

describe("Loading Indicator", () => {
  test("renders the Loading Indicator component", () => {
    render(<LoadingIndicator label="Loading..." delay={1000} />);
  });
});
