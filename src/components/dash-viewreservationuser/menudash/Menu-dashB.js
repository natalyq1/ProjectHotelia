import { Link } from 'react-router-dom';
import perfil from '../../../assets/imgs-rooms/unplash/alexander-hipp-iEEBWgY_6lA-unsplash.jpg';
import './Menu-dashB.css';
import NavbarDashboard from '../navdash/Navbar-dashB';

function MenuDashboard() {

    return (
        <>
            <div className='DashMenuUserContainer'>
                <div>
                    <Link to="/" className=''></Link>
                    <img src={perfil} alt="Imagen de perfil" />
                    <p className='DashMenuUserTextWelcome' style={{ textAlign: 'center' }}>Bienvenido</p>
                    <p className='DashMenuUserNameUser' style={{ textAlign: 'center' }}>Luis Gomez</p>
                </div>
                <NavbarDashboard />
            </div>
        </>
    );
}

export default MenuDashboard;