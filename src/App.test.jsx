import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { test, expect } from "vitest";

test("renders initial count", () => {
  render(<App />);
  const count = screen.getByTestId("count");
  expect(count.textContent).toBe("0");
});

test("increments count when button clicked", () => {
  render(<App />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);

  const count = screen.getByTestId("count");
  expect(count.textContent).toBe("1");
});

test("fetch message updates UI", async () => {
  render(<App />);
  const button = screen.getByText("Fetch Message");

  fireEvent.click(button);

  const message = await screen.findByText("Hello from API 🚀");
  expect(message).toBeInTheDocument();
});