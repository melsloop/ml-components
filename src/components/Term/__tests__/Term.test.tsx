import React from "react";
import { render } from "@testing-library/react";
import Term from "../Term";

describe("Term", () => {
  test("renders the Term component", () => {
    render(<Term>term</Term>);
  });
});
