import Room1 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-7649103.jpg'

import { Container, Form, Modal, Row, Col, Button, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import './ReservationModal.css';
function ModalConfirmReserv({ index, reservas, habitaciones, users, setUplist, upList, handleOpen, setDataModal }) {

    /*FUNCIÓN ASÍNCRONA*/
    /*1.Definir url de api a la que me voy a conectar*/
    const url = "https://app-proyectohotelia.herokuapp.com/users";

   

    /*3. Función para editar un registro*/
    const handleEdit = () => {
        handleOpen();
        setDataModal(index, reservas, habitaciones, users);
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


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
                            <input type="text" placeholder="Luis gomez" class="form-control" name="usuario" access="false" id="usuario"></input>
                        </div>
                        <div class="formbuilder-text form-group field-telefono">
                            <label for="telefono" class="formbuilder-text-label">Teléfono de contacto:</label>
                            <input type="text" placeholder="3014746531" class="form-control" name="telefono" access="false" id="telefono"></input>
                        </div>
                        <div class="formbuilder-text form-group field-correo">
                            <label for="correo" class="formbuilder-text-label">Correo electrónico:</label>
                            <input type="text" placeholder="luisgomez@gmail.com" class="form-control" name="correo" access="false" id="correo"></input>
                        </div>
                        <div class="formbuilder-text form-group field-habitacion">
                            <label for="habitacion" class="formbuilder-text-label">Habitación:</label>
                            <input type="text" placeholder="Deluxe Suite" class="form-control" name="habitacion" access="false" id="habitacion"></input>
                        </div>
                        <div class="formbuilder-text form-group field-capacidad">
                            <label for="capacidad" class="formbuilder-text-label">Capacidad:</label>
                            <input type="text" placeholder="3" class="form-control" name="capacidad" access="false" id="capacidad"></input>
                        </div>
                        <div class="formbuilder-text form-group field-text-1658882847121">
                            <label for="text-1658882847121" class="formbuilder-text-label">Camas:</label>
                            <input type="text" placeholder="2" class="form-control" name="text-1658882847121" access="false" id="text-1658882847121"></input>
                        </div>
                        <div class="formbuilder-textarea form-group field-caractersticas">
                            <label for="caractersticas" class="formbuilder-textarea-label">Descripción y características:</label>
                            <textarea type="textarea" placeholder="Cama doble tipo Queen y una cama sencilla y baño privado donde podrás disfrutar de Direct Tv, internet, escritorio, caja de seguridad, servicio al cuarto, entre otros servicios." class="form-control" name="caractersticas" access="false" id="caractersticas"></textarea>
                        </div>
                        <div class="formbuilder-text form-group field-valornoche">
                            <label for="valornoche" class="formbuilder-text-label">Valor noche:</label>
                            <input type="text" placeholder="$125000" class="form-control" name="valornoche" access="false" id="valornoche"></input>
                        </div>
                        <div class="formbuilder-text form-group field-fentrada">
                            <label for="fentrada" class="formbuilder-text-label">Fecha entrada:</label>
                            <input type="text" placeholder="2022-07-16" class="form-control" name="fentrada" access="false" id="fentrada"></input>
                        </div>
                        <div class="formbuilder-text form-group field-fsalida">
                            <label for="fsalida" class="formbuilder-text-label">Fecha salida:</label>
                            <input type="text" placeholder="2022-07-18" class="form-control" name="fsalida" access="false" id="fsalida"></input>
                        </div>
                        <div class="formbuilder-text form-group field-cantidadnoches">
                            <label for="cantidadnoches" class="formbuilder-text-label">Cantidad noches:</label>
                            <input type="text" placeholder="2" class="form-control" name="cantidadnoches" access="false" id="cantidadnoches"></input>
                        </div>
                        <div class="formbuilder-text form-group field-totalreserva">
                            <label for="totalreserva" class="formbuilder-text-label">Total reserva:</label>
                            <input type="text" placeholder="$250000" class="form-control" name="totalreserva" access="false" id="totalreserva"></input>
                        </div>
                    </div>

                    <div className='ModalReserButtons'>
                        <Link to="#">
                            <Button className=" ModalReservButtonCancel"> Cancelar</Button>
                        </Link>
                        <Link to="/habitaciones/reservas" className="">
                            <Button className=" ModalReserButtonConfirm" >Reservar </Button>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
}
export default ModalConfirmReserv;