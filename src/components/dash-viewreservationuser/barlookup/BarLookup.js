import logo from '../../c-navbar/logos/logo2.png';
import "./BarLookup.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Listrooms() {

    return (
<>
        <article className='DashLookupBarSection'>

            <div className='DashLookupContainerBar'>
                <input type="search" id="search" className='DashLookupSearchAction' name="search" placeholder='   Buscar'/>   
            </div>
            <div className='DashLookupBrand'>
                <img src={logo} alt="logo" />
            </div>
            
        </article>
        <title className='ReservUTitle ' id="contained-modal-title-vcenter">
            <p>Reservas</p>
            <Link to="/habitaciones"  className="">
            <Button className="ReservUButtonNewReserv"  ><img src="https://img.icons8.com/material-outlined/24/337ab7/plus--v1.png" style={{ width: '25px', height: '25px' }}/> Nueva reserva</Button>
          </Link>
          </title>
</>     
);
}

export default Listrooms;

