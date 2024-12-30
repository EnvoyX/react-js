import globeLogo from "../assets/globe.png";

export const Header = () => {
  return (
    <header>
      <img src={globeLogo} alt="Globe Icon" />
      <h1>My travel journal.</h1>
    </header>
  );
};
