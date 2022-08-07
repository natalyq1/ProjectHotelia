import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



function FormEstudiantes(){
/*una ruta useHistory useNavigate constante para que retorne al listar*/
const navigate=useNavigate();


/* Inicializando los inputs en el estado, para poder escribir los datros o los valores que el usuario digite en el form y manejarlos o controlarlos*/
    const [data,setData]=useState({id:"",nombre:"",apellido:"",tipodoc:"",numdoc:"",foto:"",perfil:""});

     const handleChange=({target})=>{
/*[id:2,nombre:"tatiana",apellido:"cabrera"]
int num=10;*/
/*cada vez que exista un cambio se guarda el valor en el estado data*/
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    /*Peticiones asincronas conectar con bd*/
    const url="http://localhost:5000/estudiantes";
    /* crear una funcion para procesar el envio de datos del formulario*/
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(url,data);
        //console.log(response)
        if(response.status===201){
            Swal.fire(
                'Guardado!',
                `El estudiante <strong>
                ${response.data.nombre} ${response.data.apellido}
                </strong>
                ha sido guardado exitosamente!`,
                    'success'
            )
                navigate("/estudiante");
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar el estudiante!`,
                    'error'
            )
        }
    }

return(
    <div>
        <Container className='my-4 py-2 px-3' style={{backgroundColor: '#B2B3B3', borderRadius: '8px'}} >
            <h1 className='CardRoomTitle m-3'>Datos del Huésped</h1>

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
                    <Form.Label>Tipo de documento:</Form.Label>
                    <Form.Select
                        name="tipodoc"
                        onChange={handleChange}>
                        <option>Seleccione el tipo de documento</option>
                        <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
                        <option value="Pasaporte">Tarjeta de Identidad</option>
                        <option value="Cedula de Extranjeria">Cédula de Extranjeria</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>No. de Documento:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingrese el número del documento del Estudiante"
                        name="numdoc"
                        value={data.numdoc}
                        onChange={handleChange}
                    />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Género:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Femenino, masculino, ..."
                        name="genero"
                        value={data.foto}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Correo electrónico:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su correo electrónico"
                        name="email"
                        value={data.foto}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su número de contacto"
                        name="telefono"
                        value={data.foto}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>País de origen:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su país de origen"
                        name="paisorigen"
                        value={data.foto}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su foto"
                        name="foto"
                        value={data.foto}
                        onChange={handleChange}
                    />
                </Form.Group>
               <Button className='ReservUCardButtonCancel me-3 my-3 mx-3'  >
                        Cancelar
                    </Button> 

                <Link to="/" className="" >
                <Button className='ModalCancelButtonConfirm me-3 my-3 mx-3' >
                    Guardar
                </Button>
                    
                </Link>
            </Form>
        </Container>
    </div>
);

}
export default FormEstudiantes;