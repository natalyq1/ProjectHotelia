import './Modal-roomdetail.css';

import { Container, Form, Modal, Row, Col, Button, Card } from 'react-bootstrap';
import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import ModalroomD from '../c-modal-roomdetail/Modal-roomdetail';

function ModalRD2() {

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

  return (
    <><Container>

      {list.map((item) => (
        <ModalroomD key={item._id}

          reservas={item}
          habitaciones={item}
          setList={setUpList}

          handleClose={handleClose}
          handleOpen={handleOpen}
          setDataModal={setDataModal}
        />

      ))}

      {/*upList={upList}*/}

    </Container>

    </>
  );
}

export default ModalRD2;