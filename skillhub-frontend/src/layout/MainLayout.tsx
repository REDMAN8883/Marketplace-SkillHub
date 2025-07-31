import { Outlet, Link } from "react-router-dom";


export default function MainLayout(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/"className='bx bxs-home me-2 fs-5'>Home</Link></li>
                    {/* <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li> */}
                    <li><Link to="/Marketplace">Marketplace</Link></li>
                    <li><Link to="/ServiceDetail">ServiceDetail</Link></li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    );
}