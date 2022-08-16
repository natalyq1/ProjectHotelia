import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";
import { Container, Form, Modal, Row, Button, Input } from 'react-bootstrap';
import Swal from 'sweetalert2';
import InfoHuesped from "./ValidP2";
import { Link } from "react-router-dom";
function ValidatePassword() {
    /*FUNCIÓN ASÍNCRONA*/
    /*1.Definir url de api a la que me voy a conectar*/
    /*const url = "http://localhost:5000/estudiantes";*/
    const url="https://app-proyectohotelia.herokuapp.com/users/997512"; 
    
    
  
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
        const response = await axios.put(`${url}`, dataModal);
        console.log(response);
        if (response.status === 200) {
            Swal.fire(
                'Cambio Guardado!',
                `La información se ha sido actualizado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }
        else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar',
                'intenta de nuevo.'
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

    
    //var password= (`${list.password}`);
    const validatePassword = (onBlur) => {
        console.log(list.password);
        console.log(onBlur.target.value);
    if(onBlur.target.value != list.password ) {
        Swal.fire(
            '¡Error!',
            'La contraseña actual no coincide',
            'error'
        )
        return false;
    }
    else {
        Swal.fire(
            '¡Puede seguir!',
            'La contraseña actual coincide',
            'success' 
        )
        return true;
    }
    }

    return (
        <Container>
            {
                        <InfoHuesped
                        huesped={list}
                        lastPassword={list.password}
                        setUplist={setUplist}
                        upList={upList}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        setDataModal={setDataModal}
                    />
                
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="CardRoomTitle">Editar Contraseña</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body className="TextUserInfo">
                       
                        <Form.Group className="mb-3" style={{alignItems: 'center'}}>
                            <Form.Label style={{marginRight: '10px'}}>Contraseña Actual:</Form.Label>
                            <input
                                type="password"
                                placeholder="contraseña actual"
                                name="lastPassword"
                                id= "lastPassword"
                                onBlur={validatePassword}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{marginRight: '10px'}}>Nueva Contraseña:</Form.Label>
                            <input
                                type="password"
                                placeholder="nueva contraseña"
                                name="password"
                                id= "password"
                                onChange={handleChangeModal} />
                        </Form.Group>
                      


                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn ModalCancelButtonCancel" onClick={handleClose}>
                            Cancelar
                        </button>
                        <button className="btn ModalCancelButtonConfirm" type="submit">
                            Guardar Cambios
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>


        </Container>
    );
}

export default ValidatePassword;