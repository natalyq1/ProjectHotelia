import { Card, Button, Container} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { Row} from 'react-bootstrap';

function CardHost({huesped,setUplist,upList,handleClose,handleOpen,setDataModal}){

    /*1. Crear petición asíncrona*/
  /*  const url="http://localhost:5000/estudiantes"; */
    const url="https://app-proyectohotelia.herokuapp.com/users/997512"; 

 /*2. Función para borrar un registro a partir del evento botón eliminar*/
 const handleDelete=async()=>{
        
    Swal.fire({
        title: 'Está seguro que desea eliminar este registro?',
        text: "No puedes revertir está acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:"Cancelar",
        confirmButtonText: 'Sí, Bórralo!'
      }).then((result) => {

        if (result.isConfirmed) {
            /*Eliminando de la BD */
            axios.delete(`${url}/${huesped.id}`).then((response)=>{
            console.log(response);
            
            /*Eliminando del estado */
              if (response.status === 200) {
                Swal.fire(
                    'Eliminado!',
                    `El estudiante ha sido eliminado exitosamente!`,
                    'success'
                )
                setUplist(!upList);
            }else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al eliminar el estudiante!',
                    'error'
                )
            }
   });
        }
    
      })
    
    
}
    /*3. Función para editar un registro*/
    const handleEdit=()=>{
        handleOpen();
        setDataModal(huesped);
    
}
    return(
        <div className="ReservUCardContainer ">
        <Container className='container-fluid row-fluid'>
          <Card className="ReservUCardBackground" style={{ }}>
         
            <Card.Img variant="top" src={huesped.img} className="img-card" style={{ width: '15rem' }}/>
            <Card.Body>
                <Card.Title className="">Huésped: {huesped.nombre} {huesped.apellido}</Card.Title>
                <Card.Text>
                <strong>Tipo Documento: </strong>{huesped.tipodoc}<br/>
                <strong>No. Documento: </strong>{huesped._id}<br/>
                <strong>Fecha de nacimiento: </strong>{huesped.fnacimiento}<br/>
                <strong>Género: </strong>{huesped.genero}<br/>
                <strong>Email: </strong>{huesped.email}<br/>
                <strong>Teléfono: </strong>{huesped.telefono}<br/>
                <strong>País de origen: </strong>{huesped.paisorigen}<br/>
                
                </Card.Text>
                <Button className="btn ReservUCardButtonEdit" onClick={handleEdit} >Editar</Button>
                
            </Card.Body>
            
        </Card>
        </Container>
        </div>
     
    );
}

export default CardHost;