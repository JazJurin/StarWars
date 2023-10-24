import "./App.css";
import StarshipProvider from "./Context/StarshipProvider";
import StarshipsList from "./components/StarshipsList";

function App() {
  return (
    <StarshipProvider>
      <div className="App">
        <h1>Star Wars (Logo)</h1>
        <StarshipsList />
      </div>
    </StarshipProvider>
  );
}

export default App;
