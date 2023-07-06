import NavRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "./App.styled";

function App() {
  return (
    <>
      <header>
        <Container>
          <NavBar />
        </Container>
      </header>
      <main>
        <Container>
          <NavRoutes />
        </Container>
      </main>
      <footer>
        <Container>
          <p>Footer</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
