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

                    <div className="rendered-form">
                        <div className="formbuilder-text form-group field-usuario">
                            <label for="usuario" className="formbuilder-text-label">Usuario:</label>
                            <input type="text" placeholder="Luis gomez" className="form-control" name="usuario" access="false" id="usuario"></input>
                        </div>
                        <div className="formbuilder-text form-group field-telefono">
                            <label for="telefono" className="formbuilder-text-label">Teléfono de contacto:</label>
                            <input type="text" placeholder="3014746531" className="form-control" name="telefono" access="false" id="telefono"></input>
                        </div>
                        <div className="formbuilder-text form-group field-correo">
                            <label for="correo" className="formbuilder-text-label">Correo electrónico:</label>
                            <input type="text" placeholder="luisgomez@gmail.com" className="form-control" name="correo" access="false" id="correo"></input>
                        </div>
                        <div className="formbuilder-text form-group field-habitacion">
                            <label for="habitacion" className="formbuilder-text-label">Habitación:</label>
                            <input type="text" placeholder="Deluxe Suite" className="form-control" name="habitacion" access="false" id="habitacion"></input>
                        </div>
                        <div className="formbuilder-text form-group field-capacidad">
                            <label for="capacidad" className="formbuilder-text-label">Capacidad:</label>
                            <input type="text" placeholder="3" className="form-control" name="capacidad" access="false" id="capacidad"></input>
                        </div>
                        <div className="formbuilder-text form-group field-text-1658882847121">
                            <label for="text-1658882847121" className="formbuilder-text-label">Camas:</label>
                            <input type="text" placeholder="2" className="form-control" name="text-1658882847121" access="false" id="text-1658882847121"></input>
                        </div>
                        <div className="formbuilder-textarea form-group field-caractersticas">
                            <label for="caractersticas" className="formbuilder-textarea-label">Descripción y características:</label>
                            <textarea type="textarea" placeholder="Cama doble tipo Queen y una cama sencilla y baño privado donde podrás disfrutar de Direct Tv, internet, escritorio, caja de seguridad, servicio al cuarto, entre otros servicios." className="form-control" name="caractersticas" access="false" id="caractersticas"></textarea>
                        </div>
                        <div className="formbuilder-text form-group field-valornoche">
                            <label for="valornoche" className="formbuilder-text-label">Valor noche:</label>
                            <input type="text" placeholder="$125000" className="form-control" name="valornoche" access="false" id="valornoche"></input>
                        </div>
                        <div className="formbuilder-text form-group field-fentrada">
                            <label for="fentrada" className="formbuilder-text-label">Fecha entrada:</label>
                            <input type="text" placeholder="2022-07-16" className="form-control" name="fentrada" access="false" id="fentrada"></input>
                        </div>
                        <div className="formbuilder-text form-group field-fsalida">
                            <label for="fsalida" className="formbuilder-text-label">Fecha salida:</label>
                            <input type="text" placeholder="2022-07-18" className="form-control" name="fsalida" access="false" id="fsalida"></input>
                        </div>
                        <div className="formbuilder-text form-group field-cantidadnoches">
                            <label for="cantidadnoches" className="formbuilder-text-label">Cantidad noches:</label>
                            <input type="text" placeholder="2" className="form-control" name="cantidadnoches" access="false" id="cantidadnoches"></input>
                        </div>
                        <div className="formbuilder-text form-group field-totalreserva">
                            <label for="totalreserva" className="formbuilder-text-label">Total reserva:</label>
                            <input type="text" placeholder="$250000" className="form-control" name="totalreserva" access="false" id="totalreserva"></input>
                        </div>
                    </div>

                    <div className='ModalReserButtons'>
                        <Link to="#">
                            <Button className=" ModalReservButtonCancel"> Cancelar</Button>
                        </Link>
                        <Link to="habitaciones/reservas" className="">
                            <Button className=" ModalReserButtonConfirm" >Reservar </Button>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
}
export default ModalConfirmReserv;