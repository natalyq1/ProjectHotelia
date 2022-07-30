import './Modal-cancelation.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalcancelreservation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className=' ReservUCardButtonCancel' onClick={handleShow}>
        Cancelar reserva
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton/>
        <Modal.Title className='ModalCancelTitle' style={{ textAlign: 'center' }}>RESERVACIÓN</Modal.Title>
        <Modal.Body>
          <h4 className='ModalCancelQuestion' style={{ color:'rgba(51,51,51,0.8)', textAlign: 'center' }}>¿Está seguro/a que desea cancelar? </h4><br />

        <h6 className='ModalCancelText' style={{ textAlign: 'center' }}>La solicitud será procesada y, si cumple con las políticas de cancelación del servicio reservado, se reembolsá la cantidad correspondiente a su tarjeta de crédito.
        </h6>
        <div className='ModalCancelPositionButton'>
        <Button className=" ModalCancelButtonCancel">Cancelar</Button>
        <Button className=" ModalCancelButtonConfirm">Confirmar</Button>
        </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
}
export default Modalcancelreservation;
