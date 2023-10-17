import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/my-account">My Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
