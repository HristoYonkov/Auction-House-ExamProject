import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {

    return (
        <header>
            <nav>
                <ul className="header-list">
                    <li className="header-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/">Catalog</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/">Lorem</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/">Ipsum</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}