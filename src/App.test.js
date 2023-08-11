import React from 'react';
import { App } from "./App";
import { render, screen } from "@testing-library/react";

describe("App tests", () => {
  it("render the app", () => {
    render(<App/>);
    expect(screen.getByText(/john/i)).toBeDefined();
  });
});
