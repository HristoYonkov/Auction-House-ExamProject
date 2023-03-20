import { NavLink } from "react-router-dom";
import './Header.css';

export const Header = () => {

    return (
        <header>
            <NavLink className="header" to="/" >
                <div className="img-holder">
                    <h1>Auction<span>House</span></h1>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/626/825/small/031218-28.jpg" alt="" />
                </div>
            </NavLink>
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