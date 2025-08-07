import { Outlet, Link } from "react-router-dom";
// Import css


export default function MainLayout(){
    return (
        <>
            <nav className="container-nav">
                    <ul>
                        <li><Link to="/"><i className='bx bxs-home-alt-2 icon' >Inicio</i></Link></li>
                        {/* <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/profile">Profile</Link></li> */}
                        <li><Link to="/Marketplace"><i className='bx bxs-store icon'>Marketplace</i></Link></li>
                        <li><Link to="/ServiceDetail"><i className='bx bxs-detail icon' >ServiceDetail</i></Link></li>
                    </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    );
}