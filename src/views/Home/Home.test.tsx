import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"; // renderizar e inspeccionar un componente
import Home from "./Home"; // componente a testear

test("renders content", () => {
  render(<Home />);
  const homeText = screen.getByText("Home");
  expect(homeText).toBeInTheDocument();
})