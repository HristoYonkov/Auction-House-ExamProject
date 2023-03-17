import { Link, NavLink } from "react-router-dom";
import './Header.css';

export const Header = () => {

    return (
        <header>
            <h1><NavLink className="header" to="/" >Auction<span>House</span></NavLink></h1>
            <nav>
                <ul className="header-list">
                    <li className="header-list-item">
                        <NavLink to="/" >HOME</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/catalog" >CATALOG</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/login" >LOGIN</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/register" >REGISTER</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}