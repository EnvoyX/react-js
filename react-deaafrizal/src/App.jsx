import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyButton from "./components/myButton";
import { Navbar } from "./components/MyNavbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar></Navbar>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Halo Cuyyy</p>
      <MyButton></MyButton>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
