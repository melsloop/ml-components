import React from "react";
import { render } from "@testing-library/react";
import Container from "../src/components/Container";

describe("Container", () => {
  test("renders the Container component", () => {
    render(<Container />);
  });
});
