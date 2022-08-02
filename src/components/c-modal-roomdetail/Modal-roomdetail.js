import ReactDOM from 'react-dom/client';
import React from 'react';
import './Modal-roomdetail.css';
import { Container, Form, Modal, Row, Col, Button, Card } from 'react-bootstrap';

import { useEffect, useState } from "react";
import Room1 from '../../assets/imgs-rooms/icon8-habitaciones/a-bedroom-with-a-bed.jpg'

import Axios from "axios";
import axios from "axios";

import ModalConfirmReserv from '../c-modal-confirm-reserv/ModalReser';


function ModalroomD(props, { item, reservas, habitaciones, setUplist, uplist, handleClose, handleOpen, setDataModal, setShow, handleShow }) {
  const [modalShow, setModalShow] = React.useState(false);

  const [list, setlist] = useState([]);
  /*1. Crear petición asíncrona*/
  const url2 = "https://app-proyectohotelia.herokuapp.com/habitaciones";

  /*3. Función para editar un registro*/
  const handleEdit = () => {
    handleOpen();
    setDataModal(item);
  }
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>

          <Modal.Title className="ModalRDTitle" id="contained-modal-title-vcenter">
            Twin superior
          </Modal.Title>
        </Modal.Header>
        <img className="ModalRDImage" src={Room1} alt='https://www.pexels.com/es-es/'/>
        <Modal.Body>
          <p className='ModalRDdescriptiveText' style={{ margin: '0.5em' }}>La Habitación cuenta con cama doble tipo Queen donde podrás disfrutar de LCD de 40'' con Direct Tv, internet inalámbrico y alámbrico sin costo, escritorio, caja de seguridad, room service, entre otros servicios. </p>

          <div className='ModalRDCopPrice'>
            <h4 >
              COP<br />
            </h4>
            <h4>

              $110.000
            </h4>
          </div>

          <div className='ModalRDNightAdultKid'>
            <p className='ModalRDFontNightAdultK'>
              <img src="https://img.icons8.com/android/24/000000/calendar.png" style={{ width: '', height: '20px' }} /> 1 Noches
            </p>
            <p className='ModalRDFontNightAdultK'>
              <img src="https://img.icons8.com/material-rounded/24/000000/conference-call.png" style={{ width: '', height: '20px' }} /> 1 Adultos
            </p>
            <p className='ModalRDFontNightAdultK'>
              <img src="https://img.icons8.com/material-rounded/24/000000/user.png" style={{ width: '', height: '20px' }} /> 1 Niños
            </p>
          </div>


          <section className='ModalRDBox'>
            <div className='ModalRDDetails'>

              <Container>

                <Row>
                  <Col><p className='ModalRDFontNightAdultK'>
                    <img src="https://img.icons8.com/material-outlined/24/000000/wifi--v1.png" style={{ width: '', height: '20px' }} /> Wifi
                  </p>
                    <p className='ModalRDFontNightAdultK'>
                      <img src="https://img.icons8.com/fluency-systems-regular/48/000000/balcony.png" style={{ width: '', height: '20px' }} /> Balcón
                    </p>
                    <p className='ModalRDFontNightAdultK'>
                      <img src="https://img.icons8.com/ios/50/000000/toilet.png" style={{ width: '', height: '20px' }} /> Baño privado
                    </p>
                    <p className='ModalRDFontNightAdultK'>
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/air-conditioner.png" style={{ width: '', height: '20px' }} /> Aire acondicionado
                    </p>
                  </Col>
                  <Col><p className='ModalRDFontNightAdultK'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/wheelchair.png" style={{ width: '', height: '20px' }} /> Accesibilidad
                  </p>
                    <p className='ModalRDFontNightAdultK'>
                      <img src="https://img.icons8.com/fluency-systems-regular/48/000000/elevator.png" style={{ width: '', height: '20px' }} /> Ascensor
                    </p>
                    <p className='ModalRDFontNightAdultK'>
                      <img src="https://img.icons8.com/material-rounded/24/000000/tv-show.png" style={{ width: '', height: '20px' }} /> Televisión
                    </p>
                  </Col>
                  <Col><p className='ModalRDFontNightAdultK'>
                    <img src="https://img.icons8.com/windows/32/000000/safe-ok.png" style={{ width: '', height: '20px' }} /> Caja fuerte
                  </p>
                    <p className='ModalRDFontNightAdultK'>
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/fridge.png" style={{ width: '', height: '20px' }} /> Nevera
                    </p>
                    <p className='ModalRDFontNightAdultK'>
                      <img src="https://img.icons8.com/material-outlined/24/000000/parking-ticket--v1.png" style={{ width: '', height: '20px' }} /> Parqueadero
                    </p>
                  </Col>
                </Row>
              </Container>


            </div>
          </section>

        </Modal.Body>
        <Modal.Footer>
          <section className='' >
            <Button className="btn ModalRDButtonEdit" ><img src="https://img.icons8.com/material-rounded/24/337AB7/edit--v1.png" style={{ width: '', height: '20px', font: 'VAR(--AZUL2-COLOR)' }} alt='https://www.pexels.com/es-es/'/> Editar</Button>

            <ModalConfirmReserv
              show={modalShow}
              onHide={() => setModalShow(false)} />
          </section>
        </Modal.Footer>
      </Modal>

    </>
  );
}
export default ModalroomD;