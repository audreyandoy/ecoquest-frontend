import { Link } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

const Navbar: React.FC = () => {
  const { isAuthorized } = useCurrentUser();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/my-account">My Account</Link>
        </li>
        {!isAuthorized && (
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
