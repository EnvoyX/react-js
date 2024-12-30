import reactLogo from "../assets/react.svg";
export const Header = () => {
  return (
    <header className="header">
      <img className="react-logo" src={reactLogo} alt="React Logo" />
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
