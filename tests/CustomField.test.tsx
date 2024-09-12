import React from "react";
import { render } from "@testing-library/react";
import CustomField from "../src/components/CustomField";

describe("CustomField", () => {
  test("renders the CustomField component", () => {
    render(<CustomField />);
  });
});
