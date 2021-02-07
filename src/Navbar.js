import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
    if(useLocation().pathname === "/404") return null;
    return (
        <nav className="navbar">
            <button disabled>&#8249;</button>
            <button onClick={() => window.history.back()}>&#8249;</button>
            <Link to="/">
                <h1>Dave's blog</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
            <button onClick={() => window.history.forward()}>&#8250;</button>
        </nav>
    );    
}

export default Navbar;