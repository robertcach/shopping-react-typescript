import { render, screen} from "@testing-library/react"; // renderizar e inspeccionar un componente
import Home from "./Home"; // componente a testear

// React Testing Library => herramienta para hacer test a componente de React
// Jest => test runner para hacer validaciones

// QUERIES
// screen.find* =>  para elementos asíncronos. Ej: resultado de un proceso asíncrono (api) o el "loading" mientras carga algo
// screen.get* => elementos síncronos. Si no lo encuentra, da error
// screen.query* => elementos que puede estar o no en el DOM. EJ: "loading" que no aparece desde un principio, lo hace cuando algo carga y desaparece cuando ha terminado de cargar. Retorna "null", pero no da error en las pruebas


// Test hecho con Jest
test("renders New trendy Fashion title", () => { // Descripción del test
  render(<Home />); // Con React Testing Library renderizo el componente a testear (DOM)
  const homeText = screen.getByText("New trendy Fashion"); 
  // El objeto "screen" proporciona métodos para consultar los elementos representados del DOM
  // "getByText" es una query. Las querys se usan para buscar elementos en el DOM
  expect(homeText).toBeInTheDocument(); // Validad que el elemento exista
})


