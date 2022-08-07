import Room1 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-7649103.jpg'

import { Container, Form, Modal, Row, Col, Button, Card } from 'react-bootstrap';

import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import Modalcancelreservation from '../c-modal-cancelation/Modal-cancelation';
import Modalconfirmreservation from '../c-modal-cancelation/Modal-confirmation';


import './Reservation-user.css';
function ContainerUser({ reservas, habitaciones, setUplist, upList, handleClose, handleOpen, setDataModal, setShow, handleShow }) {

  /*FUNCIÓN ASÍNCRONA*/
  /*1.Definir url de api a la que me voy a conectar*/
  const url = "https://app-proyectohotelia.herokuapp.com/reservas";

  /*3. Función para editar un registro*/
  const handleEdit = () => {
    handleOpen();
    setDataModal(reservas, habitaciones);
  }

  return (
    <>

      <section className='ReservUCardContainer' >

        <Container className='container-fluid row-fluid'>
       


        </Container>

      </section>

    </>
 
  );
}
export default ContainerUser;
{/*
    "_id": 997512,
    "tipodoc": "Cédula de ciudadanía",
    "nombre": "Romero",
    "apellido": "Quiroga",
    "fnacimiento": "1985-06-14T00:00:00.000Z",
    "genero": "masculino",
    "email": "romero1q@gmail.com",
    "telefono": "3203503265",
    "paisorigen": "Colombia",
    "password": "password",
    "tipouser": "huesped",
    "img": "/public/1659754312013_alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
    "reservas": [],
    "__v": 0
 */}
