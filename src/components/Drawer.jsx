/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink, Navigate } from "react-router-dom";

const Drawer = () => {
    console.log("drawer rendered");
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    )
}
export default Drawer;