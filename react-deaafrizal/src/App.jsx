import { useState, useEffect } from "react";
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
  // Kiri ==> Getter (Initial Value, Mutable Value)
  // Kanan ==> Setter (Function that changes value)
  const [getNavbarValue, setNavbarValue] = useState("");
  const handleNavbarValue = () => {
    setNavbarValue("My Contact");
  };

  const [getGirlfriendValue, setGirlfriendValue] = useState(1);
  const [getGirlfriendName, setGirlfriendName] = useState("");

  const incrementGirlfriend = () => {
    setGirlfriendValue((prev) => prev + 1);
  };
  const decrementGirlfriend = () => {
    if (getGirlfriendValue <= 0) return;
    setGirlfriendValue((prev) => prev - 1);
  };

  // if there's a change of data, states whatever in functional Component App or any Component,
  //useEffect will autimatically executed
  //
  useEffect(() => {
    console.log("testing");
  });

  // this useEffect will Render autimatically first-time after load the web
  // but will not trigger if there's any changes in data or states
  useEffect(() => {
    alert("Hello hehehe");
  }, []);

  useEffect(() => {
    setGirlfriendName("Herta");
  }, []);

  // if there's any changes in getGirlfriendValue,
  // will trigger useEffect
  useEffect(() => {
    if (getGirlfriendValue > 1) return setGirlfriendName("HERTAS");
    else if (getGirlfriendValue === 1) return setGirlfriendName("The HERTA");
    else if (getGirlfriendValue === 0)
      return setGirlfriendName("No Girlfriend");
    alert("Girlfriend Herta quantity changed!");
  }, [getGirlfriendValue]);

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
      <h5>Girlfriend name: {getGirlfriendName}</h5>
      <p>Girlfriends: {getGirlfriendValue}</p>
      <div className="list-buttons">
        <MyButton clicked={clicked}></MyButton>
        <button onClick={() => handleNavbarValue()}>Ubah Navigasi</button>
        {/* callback bawaan untuk function pengubah state di useState  */}
        {/* dimana prev sebagai latest data dari state */}
        {/* Sebagai best practice */}
        <button onClick={() => incrementGirlfriend()}>
          Add more girlfriend
        </button>
        <button onClick={() => decrementGirlfriend()}>remove girlfriend</button>
      </div>
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
