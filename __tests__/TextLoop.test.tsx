import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { TextLoop } from "../src/";

afterEach(() => {
  cleanup();
});

describe("TextLoop", () => {
  it("should render without errors", () => {
    render(<TextLoop />);
  });
});
