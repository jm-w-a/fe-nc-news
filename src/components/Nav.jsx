import { Link } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  return (
    <nav className="nav-top">
        <Link to="/" className="top-navlink">
            Home
        </Link>
    </nav>
  );
};

export default Nav;
