import logo from "./logo.png";
import "./App.css";
import Routers from "./Routers";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>
      <Routers />
    </div>
  );
}

export default App;
