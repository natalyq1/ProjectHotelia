import './Card-room.css';

import { Container, Form, Modal, Row, Col, Button, Card } from 'react-bootstrap';
import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import CardRoom from "./Card-room";


function CardRoom2() {

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




  /*5.(hook)UseState para refrescar el listado despues de eliminar*/
  const [upList, setUplist] = useState([false]);

  /*agregar una constante para actualizar el estado del modal*/

  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false); }
  const handleOpen = () => { setShow(true); }

  /* estado para obtener los datos del registro que se edita*/
  const [dataModal, setDataModal] = useState({})

  /*handle Submit handleChangeModal*/
  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value
    })
  }



  return (
    <>
      <Container >

        {list.map((habit, idx) => (
          <CardRoom
            habit={habit}
            key={habit._id}
            habitaciones={idx}
            setUplist={setUplist}
            upList={upList}
            handleClose={handleClose}
            handleOpen={handleOpen}
            setDataModal={setDataModal} />
        ))}



      </Container>


      {/*{
             list.map((item,es)=>(
                 <CardRoom
                 key={item}
                 
                 habitaciones={es}
                 setUplist={setUplist}
                 upList={upList}
                 handleClose={handleClose}
                 handleOpen={handleOpen}
             setDataModal={setDataModal}
                 />
             ))
         }*/ }

    </>
  );
}

export default CardRoom2;