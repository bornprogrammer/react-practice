import { Link, NavLink, Navigate } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/resource/posts">Resource</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;