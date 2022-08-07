import { Card, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { Row} from 'react-bootstrap';

function CardHost({huesped,setUplist,upList,handleClose,handleOpen,setDataModal}){

    /*1. Crear petición asíncrona*/
    const url="http://localhost:5000/estudiantes"; 
  /*  const url="https://app-proyectohotelia.herokuapp.com/users/997512"; */


    /*3. Función para editar un registro*/
    const handleEdit=()=>{
        handleOpen();
        setDataModal(huesped);
    }
    return(
        <div className=" col-8 mb-3">
        
          <Card className="ReservUCardBackground" style={{ width: '55rem' }}>
         
            <Card.Img variant="top" src={huesped.foto} className="img-card" style={{ width: '15rem' }}/>
            <Card.Body>
                <Card.Title className="">Huésped: {huesped.nombre} {huesped.apellido}</Card.Title>
                <Card.Text>
                <strong>Tipo Documento: </strong>{huesped.tipodoc}<br/>
                <strong>No. Documento: </strong>{huesped.numdoc}<br/>
                <strong>Perfil: </strong>{huesped.perfil}
                </Card.Text>
                <Button className="btn ReservUCardButtonEdit" onClick={handleEdit} >Editar</Button>
                
            </Card.Body>
            
        </Card>
        </div>
     
    );
}

export default CardHost;