import logo from '../../c-navbar/logos/logo2.png';
import "./BarLookup.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Listrooms() {

    return (
        <>
            <article className='DashLookupBarSection'>

                <div className='DashLookupContainerBar'>
                    <input type="search" id="search" className='DashLookupSearchAction' name="search" placeholder='   Buscar' />
                </div>
                <div className='DashLookupBrand'>
                    <img src={logo} alt="logo" />
                </div>

            </article>
            
        </>
    );
}

export default Listrooms;

