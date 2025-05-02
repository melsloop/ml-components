import React from "react";
import { render } from "@testing-library/react";
import CustomField from "../old/CustomField";

describe("CustomField", () => {
  test("renders the CustomField component", () => {
    render(<CustomField />);
  });
});
