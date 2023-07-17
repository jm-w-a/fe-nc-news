import { Link } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  return (
    <nav className="nav-main">
        <Link to="/" className="main-navlink">
            Home
        </Link>
    </nav>
  );
};

export default Nav;
