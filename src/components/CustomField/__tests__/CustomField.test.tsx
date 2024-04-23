import React from "react";
import { render } from "@testing-library/react";
import CustomField from "../CustomField";

describe("CustomField", () => {
  test("renders the CustomField component", () => {
    render(<CustomField />);
  });
});
