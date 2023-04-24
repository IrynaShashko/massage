import "./App.css";
import NavRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavRoutes />
    </div>
  );
}

export default App;
