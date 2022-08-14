import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <Nav className="MainNavbarColor navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">

          <section className="MainNavbarBrand"> </section>

          <Nav.Link href="#" className="navbar-brand " width="1400" ></Nav.Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" >
              <Nav.Item>
                <Link to="/" className="MainNavbarFontSize MainNavbarAside " >Inicio</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/habitaciones" className="MainNavbarFontSize">Habitaciones</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/servicios" className="MainNavbarFontSize" >Servicios</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/eventos" className="MainNavbarFontSize">Eventos</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contacto" className="MainNavbarFontSize">Contacto</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/register" className="MainNavbarFontSize"><img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" /></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/newuser" className="MainNavbarFontSize"><img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" /></Link>
              </Nav.Item>


              
            </ul>
          </div>
        </div>
      </Nav>
    </>


  );
}

export default Navbar;