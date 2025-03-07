import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return <>
        <div className="FooterContainer">
            <nav className="NavigationLinks">
                <Link to={"/products"}>Products</Link>
                <Link to={"/faq"}>FAQ</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/cart"}>Cart</Link>
            </nav>
            
            <a href="https://www.instagram.com/">
                <img src="src\assets\instagram-icon.png" alt="" />
            </a>
        </div>
    </>
}

export default Footer;