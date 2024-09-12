import React from "react";
import { render } from "@testing-library/react";
import Scrollbar from "../src/components/Scrollbar";

describe("Scrollbar", () => {
  test("renders the Scrollbar component", () => {
    render(<Scrollbar textDirection="right" orientation="vertical">Content</Scrollbar>);
  });
});
