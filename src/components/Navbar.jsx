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
        </nav>
    );
};

export default Navbar;
