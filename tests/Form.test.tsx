import React from "react";
import { render } from "@testing-library/react";
import Form from "../src/components/Form";

describe("Form", () => {
  test("renders the Form component", () => {
    render(<Form/>);
  });
});
