
import { Link } from "react-router-dom";
const Navbar = () => {    return ( 
        <nav className="navbar">
            <h1>D-Voting</h1>          
            <Link to="/">All Party</Link>
            <Link to="/Voting">Voting</Link>
            <Link to="/Result">Result</Link>
        </nav>       
    ); 
}
export default Navbar;
