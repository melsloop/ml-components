import React from "react";
import { render } from "@testing-library/react";
import LoadingIndicator from "../src/components/LoadingIndicator";

describe("Loading Indicator", () => {
  test("renders the Loading Indicator component", () => {
    render(<LoadingIndicator label="Loading..." delay={1000} />);
  });
});
