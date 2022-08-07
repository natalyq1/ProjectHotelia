import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
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
        <Container className='bg-secondary my-5 p-4' >
        <h1 className=' m-3'>Ingreso Nuevo Huésped</h1>

        <Form action=""  onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Ingrese el Nombre del Estudiante"
        name="nombre"
        value={data.nombre}
        onChange={handleChange}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Ingrese el apellido del Estudiante"
        name="apellido"
        value={data.apellido}
        onChange={handleChange}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Tipo de documento</Form.Label>
        <Form.Select
        name="tipodoc"
        onChange={handleChange}>
            <option>Seleccione el tipo de documento</option>
            <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
            <option value="Cedula de Extranjeria">Cédula de Extranjeria</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>No. de Documento</Form.Label>
            <Form.Control 
            type="number"
            placeholder="Ingrese el número del documento del Estudiante"
            name="numdoc"
            value={data.numdoc}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Foto</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Ingrese la URL de la imagen"
            name="foto"
            value={data.foto}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Perfil</Form.Label>
            <Form.Control 
            as="textarea" 
            rows={3}
            placeholder="Digite su perfil"
            name="perfil" 
            value={data.perfil}
            onChange={handleChange}
            />
        </Form.Group>
        <button className='btn btn-info me-3 my-3 mx-3' >
            Guardar
        </button>
       
       <Link to="/estudiante" className="me-3 text-decoration-none" >

        <button className='btn btn-info me-3 my-3 mx-3'  >
            Cancelar
        </button>
</Link>
        </Form>
        </Container>
    </div>
);

}
export default FormEstudiantes;