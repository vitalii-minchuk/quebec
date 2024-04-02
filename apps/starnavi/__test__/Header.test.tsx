import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layouts/header";

describe("Header", () => {
  it("renders logo component in h3 tag", () => {
    render(<Header />);
    const headerElement = screen.getByText("Starnavi");

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe("H3");
  });
});
