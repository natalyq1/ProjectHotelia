import './Modal-cancelation.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalconfirmreservation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className=' ReservUCardButtonEdit' onClick={handleShow}>
        Confirmar reserva
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Title className='ModalCancelTitle' style={{ textAlign: 'center' }}>RESERVACIÓN</Modal.Title>
        <Modal.Body>
          <h4 className='ModalCancelQuestion' style={{ color: 'rgba(51,51,51,0.8)', textAlign: 'center' }}>¿Está seguro/a que desea confirmar la reserva? </h4><br />

          <h6 className='ModalCancelText' style={{ textAlign: 'center' }}>La solicitud será procesada al confirmar y está aparecerá como confirmada en sus reservas.
          </h6>
          <div className='ModalCancelPositionButton'>
            <Button className=" ModalCancelButtonCancel" onClick={handleClose}>Cancelar</Button>
            <Button className=" ModalCancelButtonConfirm" onClick={handleClose}>Confirmar</Button>
          </div>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default Modalconfirmreservation;
