/* eslint-disable react/prop-types */
export const Navbar = ({ navText, navHeading }) => {
  return (
    <div className="navbar">
      <ul>
        <h1>{navHeading}</h1>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="">{navText}</a>
        </li>
      </ul>
    </div>
  );
};
