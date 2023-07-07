import NavRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Container, Header, Main } from "./App.styled";

function App() {
  return (
    <>
      <Header>
        <Container>
          <NavBar />
        </Container>
      </Header>
      <Main>
        <Container>
          <NavRoutes />
        </Container>
      </Main>
      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}

export default App;
