import React from "react";
import { render } from "@testing-library/react";
import DateFormat from "../src/components/DateFormat";

describe("DateFormat", () => {
  test("renders the DateFormat component", () => {
    render(<DateFormat date={new Date()} />);
  });
});
