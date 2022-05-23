import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react"; // renderizar e inspeccionar un componente
import Home from "./Home"; // componente a testear

test("renders content", () => {
  const view = render(<Home />)
  expect(view.container).toHaveTextContent("Home")
})