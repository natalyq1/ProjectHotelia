import './Card-room.css';
import React from 'react';

import { Container, Form, Modal, Row, Col, Button, Card } from 'react-bootstrap';

import { useEffect, useState } from "react";
import Room1 from '../../assets/imgs-rooms/icon8-habitaciones/a-bedroom-with-a-bed.jpg'

import Axios from "axios";
import axios from "axios";

import ModalroomD from '../../components/c-modal-roomdetail/Modal-roomdetail';
//import ModalRDet2 from '../../components/c-modal-roomdetail/ModalRD2'

function Cardroom({ item, habit, reservas, habitaciones, setUplist, upList, handleClose, handleOpen, setDataModal, setShow, handleShow }) {
  const [modalShow, setModalShow] = React.useState(false);

  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://app-proyectohotelia.herokuapp.com/habitaciones",
      //url:'https://jsonplaceholder.typicode.com/posts',
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);



  /*3. Función para editar un registro*/
  const handleEdit = () => {
    handleOpen();
    setDataModal(reservas, habitaciones);
  }


  return (
    <>
      <section className='CardRoomContainer' >

        <Container className='container-fluid row-fluid'>

          <Card className='CardRoomGeneralView'>{/*alt="https://www.pexels.com/es-es/"*/}
            <Card.Img variant="top" className='CardRoomImage'
              src={`https://app-proyectohotelia.herokuapp.com${habit.img}`}  />
            <Card.Body>
              <Card.Title className='CardRoomTitle' style={{ textAlign: 'center' }}>{habit.nombrehab} </Card.Title>

              <p className='CardRoomDescriptiveText'>{habit.descripcion} </p>
              <div className='CardRoomState' >
                <h6 >
                  Estado:
                </h6>
                <h6>
                  {habit.estado}
                </h6>
              </div>
              <div className='CardRoomButtonPricing'>
                <Card.Text className='CardRoomCop'>
                  COP<br />
                  noche
                </Card.Text>
                <Card.Text className='CardRoomPrice'  >
                  ${habit.valornoche}

                </Card.Text>
                <Button className=' CardRoomButtonView'
                  variant="primary" onClick={() => setModalShow(true)}>VER</Button>
              </div>
            </Card.Body>
          </Card>

        </Container>
      </section>

      { /*ModalRDet2*/}
      <ModalroomD

        show={modalShow}
        onHide={() => setModalShow(false)}
      />


    </>
  );
}

export default Cardroom;

