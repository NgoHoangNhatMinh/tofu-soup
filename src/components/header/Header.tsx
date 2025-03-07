import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return <>
        <div className="HeaderContainer">
            <nav className="NavigationLinks">
                <Link to={"/products"}>Products</Link>
                <Link to={"/faq"}>FAQ</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/cart"}>Cart</Link>
            </nav>

            <Link to={"/"}>
                <h1>HOME</h1>
            </Link>
        </div>
    </>
}

export default Header;