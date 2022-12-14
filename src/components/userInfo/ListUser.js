import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";
import { Container, Form, Modal, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import InfoHuesped from "./CardUser";
import { Link } from "react-router-dom";
function ListHost() {
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


    return (
        <Container>
            {
                        <InfoHuesped
                        
                        huesped={list}
                        setUplist={setUplist}
                        upList={upList}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        setDataModal={setDataModal}
                    />
                
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="CardRoomTitle">Editar Huésped</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body className="TextUserInfo">
                        <Form.Group className="mb-1">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                name="nombre"
                                value={dataModal.nombre}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellido:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su apellido"
                                name="apellido"
                                value={dataModal.apellido}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de nacimiento:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su fecha de nacimiento"
                                name="fnacimiento"
                                value={dataModal.fnacimiento}
                                 />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Tipo de Documento:</Form.Label>
                            <Form.Select
                                name="tipodoc"
                                >
                                <option value={dataModal.tipodoc}>{dataModal.tipodoc}</option>
                                </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>No. Documento</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su número de documento"
                                name="_id"
                                value={dataModal._id}
                                 />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Género:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Femenino, masculino, ..."
                                name="genero"
                                value={dataModal.genero}
                                onChange={handleChangeModal} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Correo electrónico:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su correo electrónico"
                                name="email"
                                value={dataModal.email}
                                onChange={handleChangeModal} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Teléfono:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su número de contacto"
                                name="telefono"
                                value={dataModal.telefono}
                                onChange={handleChangeModal} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>País de origen:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su país de origen"
                                name="paisorigen"
                                value={dataModal.paisorigen}
                                onChange={handleChangeModal} />
                        </Form.Group>
{/* <Form.Group className="mb-3">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="password"
                                value={dataModal.password}
                                onChange={handleChangeModal} />
                        </Form.Group>*/}
                        

                        <Form.Group className="mb-3">
                            <Form.Label>Usuario tipo:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={dataModal.tipouser}
                                name="tipouser"
                                value={dataModal.tipouser}
                                onChange={handleChangeModal} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Foto</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su foto"
                                name="img"
                                value={dataModal.img}
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

export default ListHost;