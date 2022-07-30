import Room1 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-7649103.jpg'

import {Container, Form, Modal, Row, Col, Button, Card} from 'react-bootstrap';

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import './ReservationModal.css';
function ModalConfirmReserv({reservas,habitaciones,users,setUplist,upList,handleOpen,setDataModal}) {

 /*FUNCIÓN ASÍNCRONA*/
    /*1.Definir url de api a la que me voy a conectar*/
    const url="https://app-proyectohotelia.herokuapp.com/users";
    const url2="https://app-proyectohotelia.herokuapp.com/habitaciones";

    /*2. Función para borrar un registro a partir del evento botón eliminar*/
    const handleDelete=async()=>{
        
        window.prompt({
             title:'Está seguro que desea eliminar este registro?'  
          }).then((result) => {

            if (result.isConfirmed) {
                /*Eliminando de la BD */
                axios.delete(`${url,url2}/${reservas.id,habitaciones.id, users.id}`).then((response)=>{
                console.log(response);
                
                /*Eliminando del estado */
                  if (response.status === 200) {
                    prompt(
                        "cancelando"
                    )
                    setUplist(!upList);
                }else {
                    window.prompt(
                        'Error!',
                        'Hubo un problema al eliminar el reservas!',
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
        setDataModal(reservas, habitaciones,users);
    }


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
   
return(


<>

{/*<!-- Button trigger modal -->*/}
<Button className=' ModalreservButton' onClick={handleShow}>
        Reservar ahora
      </Button>

{/*<!-- Modal -->    modal-dialog modal-lg*/}
<Modal show={show} onHide={handleClose}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered>
<Modal.Header closeButton >
        <Modal.Title className='ModalConfirmReserTitle' style={{ textAlign: 'center' }}>DATOS DE RESERVA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <div class="rendered-form">
    <div class="formbuilder-text form-group field-usuario">
        <label for="usuario" class="formbuilder-text-label">Usuario:</label>
        <input type="text" placeholder="nombre y apellido" class="form-control" name="usuario" access="false" id="usuario"></input>
    </div>
    <div class="formbuilder-text form-group field-telefono">
        <label for="telefono" class="formbuilder-text-label">Teléfono de contacto:</label>
        <input type="text" placeholder="telefono" class="form-control" name="telefono" access="false" id="telefono"></input>
    </div>
    <div class="formbuilder-text form-group field-correo">
        <label for="correo" class="formbuilder-text-label">Correo electrónico:</label>
        <input type="text" placeholder="correo" class="form-control" name="correo" access="false" id="correo"></input>
    </div>
    <div class="formbuilder-text form-group field-habitacion">
        <label for="habitacion" class="formbuilder-text-label">Habitación:</label>
        <input type="text" placeholder="deluxe" class="form-control" name="habitacion" access="false" id="habitacion"></input>
    </div>
    <div class="formbuilder-text form-group field-capacidad">
        <label for="capacidad" class="formbuilder-text-label">Capacidad:</label>
        <input type="text" placeholder="numero capacidad" class="form-control" name="capacidad" access="false" id="capacidad"></input>
    </div>
    <div class="formbuilder-text form-group field-text-1658882847121">
        <label for="text-1658882847121" class="formbuilder-text-label">Camas:</label>
        <input type="text" placeholder="cantidad camas" class="form-control" name="text-1658882847121" access="false" id="text-1658882847121"></input>
    </div>
    <div class="formbuilder-textarea form-group field-caractersticas">
        <label for="caractersticas" class="formbuilder-textarea-label">Descripción y características:</label>
        <textarea type="textarea" placeholder="detalles, key y si" class="form-control" name="caractersticas" access="false" id="caractersticas"></textarea>
    </div>
    <div class="formbuilder-text form-group field-valornoche">
        <label for="valornoche" class="formbuilder-text-label">Valor noche:</label>
        <input type="text" placeholder="$" class="form-control" name="valornoche" access="false" id="valornoche"></input>
    </div>
    <div class="formbuilder-text form-group field-fentrada">
        <label for="fentrada" class="formbuilder-text-label">Fecha entrada:</label>
        <input type="text" placeholder="fentrada" class="form-control" name="fentrada" access="false" id="fentrada"></input>
    </div>
    <div class="formbuilder-text form-group field-fsalida">
        <label for="fsalida" class="formbuilder-text-label">Fecha salida:</label>
        <input type="text" placeholder="fsalida" class="form-control" name="fsalida" access="false" id="fsalida"></input>
    </div>
    <div class="formbuilder-text form-group field-cantidadnoches">
        <label for="cantidadnoches" class="formbuilder-text-label">Cantidad noches:</label>
        <input type="text" placeholder="cantidadnoches" class="form-control" name="cantidadnoches" access="false" id="cantidadnoches"></input>
    </div>
    <div class="formbuilder-text form-group field-totalreserva">
        <label for="totalreserva" class="formbuilder-text-label">Total reserva:</label>
        <input type="text" placeholder="totalreserva" class="form-control" name="totalreserva" access="false" id="totalreserva"></input>
    </div>
</div>

        <div className='ModalReserButtons'>
        <Link to="#">
        <Button className=" ModalReservButtonCancel"> Cancelar</Button>
        </Link>
        <Link to="/habitaciones/reservas"  className="">
        <Button className=" ModalReserButtonConfirm" >Reservar </Button>
        </Link>
        </div>
        </Modal.Body> 
</Modal>

            
</>
        

);
}
export default ModalConfirmReserv;