import NavRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      <NavBar />
      <NavRoutes />
    </Container>
  );
}

export default App;
