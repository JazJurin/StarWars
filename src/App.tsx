import "./App.css";
import StarshipProvider from "./Context/StarshipProvider";
import Rutas from "./components/routes/Routes";

function App() {
  return (
    <StarshipProvider>
      <div className="App">
        <Rutas />
      </div>
    </StarshipProvider>
  );
}

export default App;
