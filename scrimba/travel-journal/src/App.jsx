import "./App.css";
import { Header } from "./components/Header";
import { Entry } from "./components/Entry";
function App() {
  return (
    <>
      <Header></Header>
      <main className="container">
        <Entry></Entry>
      </main>
    </>
  );
}

export default App;
