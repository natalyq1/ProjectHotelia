import Room1 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-7649103.jpg'
import Room2 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-5179592.jpg'


import './Reservation-user.css';

import { Container, Form, Modal, Row, Col, Button, Card } from 'react-bootstrap';
import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import CardReservation from "./CardReserv";


function Reservation2() {

    /*FUNCIÓN ASÍNCRONA*/
    /*1.Definir url de api a la que me voy a conectar*/
    const url = "https://app-proyectohotelia.herokuapp.com/reservas";
    /*2.Generar funcion asincrona para conectar al API*/
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }
    /*3.(hook)UseState para guardar la respuesta de la peticion*/
    const [list, setList] = useState([]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${url}/${dataModal.id}`, dataModal);
        console.log(response);
        if (response.status === 200) {
            prompt(
                'Cambio Guardado!/n'
            )
            handleClose();
            setUplist(!upList);
        }
        else {
            prompt(
                'Error!/n'
            )
        }
    }

    /*4. (hook) useEfect ejecuta funciones cada vez q renderizamos un componente*/
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])//se actualiza cada vez q se cambie el estado upList
    console.log(list);



    return (
        <><Container>
            {
                list.map((es, index) => (
                    <CardReservation
                        key={index}
                        reservas={es}
                        habitaciones={es}
                        setUplist={setUplist}
                        upList={upList}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        setDataModal={setDataModal}
                    />
                ))
            }

        </Container>




        </>
    );
}

export default Reservation2;