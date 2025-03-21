import { Link } from "react-router-dom";
import logo from "../assets/fcbarcelona.png"; // Adjust image path

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-black text-white">
            <img src={logo} alt="FCB Logo" className="w-16" />
            <div className="space-x-8">
                <Link to="/">HOME</Link>
                <Link to="/clubhistory">Club History</Link>
                <Link to="/team">Team</Link>
                <Link to="/matches">Matches</Link>
                <Link to="/store">Store</Link>
            </div>
            <p>
                <a href="https://www.facebook.com/fcbbarcelona" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/fcbbarcelona/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/fcbbarcelona" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/user/FCBarcelona" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
            </p>
            <p>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/news">News</Link>
                <Link to="/blog">Blog</Link>
            </p>
            <p>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart">Cart ({/* Get cart item count */})</Link>
                <Link to="/account">Account</Link>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Checkout
                </button>
            </p>


        </nav>
    );
};

export default Navbar;
