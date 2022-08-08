import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



function FormUser(){
/*una ruta useHistory useNavigate constante para que retorne al listar*/
const navigate=useNavigate();


/* Inicializando los inputs en el estado, para poder escribir los datros o los valores que el usuario digite en el form y manejarlos o controlarlos*/
    const [data,setData]=useState({_id:"",nombre:"",apellido:"",fnacimiento:"",tipodoc:"",genero:"", email:"", telefono:"",paisorigen:"",password:"",tipouser:"", img:""});

     const handleChange=({target})=>{

/*cada vez que exista un cambio se guarda el valor en el estado data*/
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    /*Peticiones asincronas conectar con bd*/
    /*const url="http://localhost:5000/estudiantes";*/
    const url="https://app-proyectohotelia.herokuapp.com/users";
    /* crear una funcion para procesar el envio de datos del formulario*/
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(url,data);
        //console.log(response)
        if(response.status===201){
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar el huésped!`,
                    'error'
                
            )
                
        }else{
            Swal.fire(
                'Guardado!',
                ` <strong>
                Ha sido registrado exitosamente!`,
                    'success'
            )
            navigate("/habitaciones");
        }
    }

return(
    <div>
        <Container className=' my-5 p-4' style={{backgroundColor: '#B2B3B3', borderRadius: '8px'}}>
        <h1 className='CardRoomTitle mb-3'>Ingreso Nuevo Huésped</h1>

        <Form action="" onSubmit={handleSubmit} 
            className='TextUserInfo'>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                        name="nombre"
                        value={data.nombre}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese sus apellidos"
                        name="apellido"
                        value={data.apellido}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                            <Form.Label>Fecha de nacimiento:</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Ingrese su fecha de nacimiento"
                                name="fnacimiento"
                                value={data.fnacimiento}
                                onChange={handleChange} />
                        </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Tipo de documento:</Form.Label>
                    <Form.Select
                        name="tipodoc"
                        onChange={handleChange}>
                        <option>Seleccione el tipo de documento</option>
                        <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
                        <option value="Pasaporte">Pasaporte</option>
                        <option value="Cedula de Extranjeria">Cédula de Extranjeria</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>No. de Documento:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingrese el número del documento del Huésped"
                        name="_id"
                        value={data._id}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Género:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Femenino, masculino, ..."
                        name="genero"
                        value={data.genero}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Correo electrónico:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su correo electrónico"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="password"
                                value={data.password}
                                onChange={handleChange} />
                        </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su número de contacto"
                        name="telefono"
                        value={data.telefono}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>País de origen:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su país de origen"
                        name="paisorigen"
                        value={data.paisorigen}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                            <Form.Label>Usuario tipo:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="huesped"
                                name="tipouser"
                                value={data.tipouser}
                                onChange={handleChange} />
                        </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su foto"
                        name="img"
                        value={data.img}
                        onChange={handleChange}
                    />
                </Form.Group>
               
               <button className='ModalCancelButtonConfirm me-3 my-3 mx-3' >
                    Guardar
                </button> 
                 

                 <Link to="/" className="me-3 text-decoration-none" >
                <button className='ReservUCardButtonCancel me-3 my-3 mx-3'  >
                   Cancelar    
                    </button> 
                </Link>

            </Form>
        </Container>
    </div>
);

}
export default FormUser;