import "./App.css";
import StarshipProvider from "./Context/StarshipProvider";
import MyRoutes from "./components/routes/Routes";

function App() {
  return (
    <StarshipProvider>
      <div className="App">
        <MyRoutes />
      </div>
    </StarshipProvider>
  );
}

export default App;
