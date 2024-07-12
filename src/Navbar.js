import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "black",
                    backgroundColor: '#be9ac2',
                    borderRadius: '10px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;