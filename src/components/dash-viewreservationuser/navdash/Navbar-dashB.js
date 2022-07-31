import {Nav,Button }from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar-dashB.css';

function NavbarDashboard() {
    return (
        <div className='DashNavOptionsContainer'>
            <Nav className="DashNavOptionsColor navbar navbar-expand-lg navbar-light " >
                <div className="">
                    <Nav.Link href="#" className="navbar-brand  " width="1400" ></Nav.Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="DashNavOptionsHamburger"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu--v1.png" style={{ width: '25px', height: '27px'}}/></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="DashNavOptionsDisplay navbar-nav">
                        <div className="container">
                            <div className=" row">
                            <Nav.Item>
                                <Nav.Link href="/habitaciones/reservas/perfil" className=" DashNavOptionsButtonOpts positionNavDash" style={{ marginBottom: '0.5em'}} >Perfil</Nav.Link>
                            </Nav.Item></div>
                            <div className="row"><Nav.Item>
                                <Nav.Link activeKey="active" activehref="/habitaciones/reservas/misreservas" className=" DashOptionActive  positionNavDash" style={{ marginBottom: '0.5em'}}>Mis reservas</Nav.Link>
                            </Nav.Item></div>
                            <div className=" row"> <Nav.Item>
                                <Nav.Link href="/habitaciones/reservas/habitaciones" className=" DashNavOptionsButtonOpts positionNavDash" style={{ marginBottom: '0.5em'}} >Habitaciones</Nav.Link>
                            </Nav.Item> </div>
            <Link to="/habitaciones" className='DashNavOptionsLogout'>
                <button className='DashNavButtonLogOut'><img src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/exit.png" style={{ width: '25px', height: '27px' }} /> Cerrar sesión</button>
            </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </Nav>
        </div>
    );
}

export default NavbarDashboard;