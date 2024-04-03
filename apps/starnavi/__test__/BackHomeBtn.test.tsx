import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";
import { EAppRouting } from "@/enums";
import { BackHomeBtn } from "@/components/layouts/back-home-btn";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe("BackHomeBtn", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      back: jest.fn(),
    });
  });

  it("renders null when pathname is ROOT", () => {
    usePathname.mockReturnValue(EAppRouting.ROOT);

    const { container } = render(<BackHomeBtn />);

    expect(container.firstChild).toBeNull();
  });

  it("renders button and calls router.back() on click", () => {
    usePathname.mockReturnValue("/some-other-path");
    const { getByText } = render(<BackHomeBtn />);

    const button = getByText("Back Home");
    fireEvent.click(button);

    expect(useRouter().back).toHaveBeenCalledTimes(1);
  });
});
