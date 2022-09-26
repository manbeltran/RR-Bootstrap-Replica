import TopBar from "./components/TopBar";
import Background from "./components/Background";
import "./App.css"
import StoreListing from "./components/StoreListing";

function App() {
  return (
    <div className="App">
     <TopBar />
     <Background />
     <StoreListing />
    </div>
  );
}

export default App;