import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyButton from "./components/myButton";
import { Navbar } from "./components/MyNavbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const navHeading = "This is Navigation Bar";
  const navText = "Social Media";
  const [count, setCount] = useState(0);

  const clicked = () => {
    return alert("Button Clicked!");
  };

  const paragraph = () => {
    return (
      <div>
        <i>Mantap Bang Ini Paragraph</i>
        <marquee>Jos Gandos</marquee>
      </div>
    );
  };

  // useState
  const [getNavbarValue, setNavbarValue] = useState("");
  const handleNavbarValue = () => {
    setNavbarValue("My Contact");
  };

  return (
    <>
      <div>
        <Navbar
          navText={navText}
          navHeading={navHeading}
          navValue={getNavbarValue}
        ></Navbar>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Halo Cuyyy</p>
      <MyButton clicked={clicked}></MyButton>
      <button onClick={() => handleNavbarValue()}>Ubah Navigasi</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer paragraph={paragraph}></Footer>
    </>
  );
};

export default App;
