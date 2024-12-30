import reactLogo from "../assets/react-logo.png";
export const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={reactLogo} alt="React Logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
};
