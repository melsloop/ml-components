import React from "react";
import { render } from "@testing-library/react";
import Annotation from "../Annotation";

describe("Annotation", () => {
  test("renders the Annotation component", () => {
    render(<Annotation index={1} />);
  });
});
