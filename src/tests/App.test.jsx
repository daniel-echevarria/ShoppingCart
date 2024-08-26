// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App/App";

describe("App component", () => {
  // it("renders bacsic app", () => {
  //   // since screen does not have the container property, we'll destructure render to obtain a container for this test
  //   const { container } = render(<App />);
  //   expect(container).toMatchSnapshot();
  // });

  it("Start with a heading called Home", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/home/i);
  });

  it("Has a nav with a home button", () => {
    render(<App />);
    const navBar = screen.getByRole("navigation");
    const { getByRole } = within(navBar);
    expect(getByRole("button", { name: /home/i })).toBeInTheDocument();
  });

  it("Has a nav with a shop button", () => {
    render(<App />);
    const navBar = screen.getByRole("navigation");
    const { getByRole } = within(navBar);
    expect(getByRole("button", { name: /shop/i })).toBeInTheDocument();
  });

  it("renders Shop Page after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Shop" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/Shop/i);
  });
});
