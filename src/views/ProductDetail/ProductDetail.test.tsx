import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

test("show add-to-cart button", () => {
  render(<ProductDetail />)
  /* const button = screen.getByText("Add to cart") */
  const button = screen.getByRole("button", { name: "Add to cart" })
  expect(button).toBeInTheDocument()
})