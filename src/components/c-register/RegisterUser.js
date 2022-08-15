import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {  Link} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import {Ftitulo, Ftitulo2, Ftitulo3, Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/Formulariovalidacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../registrovalida/Input';


const Registro =()=>{
    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [fnacimiento, cambiarFnacimiento] = useState({campo: '', valido: null});
    const [tipodoc, cambiarTipodoc] = useState({campo: '', valido: null});
    const [_id, cambiarID] = useState({campo: '', valido: null});
    const [genero, cambiarGenero] = useState({campo: '', valido: null});
    const [email, cambiarEmail] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [paisorigen, cambiarPaisorigen] = useState({campo: '', valido: null});
    const [tipouser, cambiarTipouser] = useState({campo: '', valido: null});
    const [img, cambiarImg] = useState({campo: '', valido: null});
	const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 

  const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
		fnacimiento: /^\d{7,14}$/,
        // /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/, 
        tipodoc: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
        _id: /^\d{7,14}$/,
        genero: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		password: /^.{4,12}$/, // 4 a 12 digitos.
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        paisorigen: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        tipouser: /^huesped$/,
        img: /^[a-zA-ZÀ-ÿ\s]{0,40}$/,
        //[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]{2,}

	}

const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}
const navigate=useNavigate();
const [data,setData]=useState({_id:"",nombre:"",apellido:"",fnacimiento:"",tipodoc:"",genero:"", email:"", telefono:"",paisorigen:"",password:"",tipouser:"", img:""});
const handleChange=({target})=>{

    /*cada vez que exista un cambio se guarda el valor en el estado data*/
            setData({
                ...data,
                [target.name]:target.value
            })
        }


const onSubmit =(e)=>{
  e.preventDefault();
  const url="https://app-proyectohotelia.herokuapp.com/users";
const response= axios.post(url,data);
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
  if(
  nombre.valido==='true'&&
  apellido.valido==='true'&&
  fnacimiento.valido==='true'&&
  tipodoc.valido==='true'&&
  _id.valido==='true'&&
  genero.valido==='true'&&
  email.valido==='true'&&
  password.valido==='true'&&
  telefono.valido==='true'&&
  paisorigen.valido==='true'&&
  tipouser.valido==='true'&&
  
  terminos
  ){
	cambiarFormularioValido(true);
	cambiarNombre({campo:'',valido: null});
    cambiarApellido({campo:'',valido:''});
	cambiarPassword({campo:'',valido: null});
	cambiarFnacimiento({campo:'',valido:null});
    cambiarTipodoc({campo:'',valido:null});
    cambiarID({campo:'',valido:null});
    cambiarGenero({campo:'',valido:null});
    cambiarEmail({campo:'',valido: null});
	cambiarTelefono({campo:'',valido: null});
    cambiarPaisorigen({campo:'',valido: null});
    cambiarTipouser({campo:'',valido:'null'});
    cambiarImg({campo:'',valido:'null'});
}else{
	cambiarFormularioValido(false);
}
}



return(

    <main>
    
    <h3 style={{textAlign: 'center', marginTop: '10px', color: '#337ab7'}}>Nuevo Huésped</h3>
    
     <Formulario action="" onSubmit={onSubmit} > 
     
               <Input
                   estado={nombre}
                   cambiarEstado={cambiarNombre}
                   tipo="text"
                   label="Nombre"
                   placeholder="John"
                   name="nombre"
                   value={data.nombre}
                   onChange={handleChange}
                   leyendaError="El nombre solo puede contener letras y espacios."
                   expresionRegular={expresiones.nombre}
               />
               <Input
                   estado={apellido}
                   cambiarEstado={cambiarApellido}
                   tipo="text"
                   label="Apellido"
                   placeholder="Doe"
                   name="apellido"
                   value={data.apellido}
                   onChange={handleChange}
                   leyendaError="El apellido solo puede contener letras y espacios."
                   expresionRegular={expresiones.apellido}
        />
               
            
            <Input estado={fnacimiento}
                   cambiarEstado={cambiarFnacimiento}
                   tipo="text" 
                   label="Fecha de nacimiento" 
                   placeholder="12/02/1994"
                   name="fnacimiento"
                   value={data.fnacimiento}
                   onChange={handleChange}
                   leyendaError="Debe ser una fecha."
                   expresionRegular={expresiones.fnacimiento}
             /> 

<Input
                   estado={tipodoc}
                   cambiarEstado={cambiarTipodoc}
                   tipo="text"
                   label="Tipo de documento"
                   placeholder="cedula, pasaporte, etc."
                   name="tipodoc"
                   value={data.tipodoc}
                   onChange={handleChange}
                   leyendaError="El nombre solo puede contener letras y espacios."
                   expresionRegular={expresiones.tipodoc}
               />

<Input
                   estado={_id}
                   cambiarEstado={cambiarID}
                   tipo="number"
                   label="Numero de documento"
                   placeholder="ej:121212445"
                   name="_id"
                   value={data._id}
                        onChange={handleChange}
                   leyendaError="El nombre solo puede contener numeros."
                   expresionRegular={expresiones._id}
               />

<Input
                   estado={genero}
                   cambiarEstado={cambiarGenero}
                   tipo="text"
                   label="Género"
                   placeholder="femenino, masculino, otros..."
                   name="genero"
                   value={data.genero}
                        onChange={handleChange}
                   leyendaError="El nombre solo puede contener texto."
                   expresionRegular={expresiones.genero}
               />



               <Input
                   estado={email}
                   cambiarEstado={cambiarEmail}
                   tipo="email"
                   label="Correo Electrónico"
                   placeholder="john@correo.com"
                   name="email"
                   value={data.email}
                        onChange={handleChange}
                   leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                   expresionRegular={expresiones.email}
               />
               
               <Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password"
                    value={data.password}
                                onChange={handleChange} 
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
        
               />

               <Input
                   estado={telefono}
                   cambiarEstado={cambiarTelefono}
                   tipo="text"
                   label="Teléfono"
                   placeholder="4491234567"
                   name="telefono"
                   value={data.telefono}
                        onChange={handleChange}
                   leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
                   expresionRegular={expresiones.telefono}
               />

<Input
                   estado={paisorigen}
                   cambiarEstado={cambiarPaisorigen}
                   tipo="text"
                   label="País de origen"
                   placeholder="Roma"
                   name="paisorigen"
                   value={data.paisorigen}
                        onChange={handleChange}
                   leyendaError="Debe ser texto."
                   expresionRegular={expresiones.paisorigen}
        
               />

<Input
                   estado={tipouser}
                   cambiarEstado={cambiarTipouser}
                   tipo="text"
                   label="Tipo de usuario:"
                   placeholder="huesped"
                   name="tipouser"
                   value={data.tipouser}
                                onChange={handleChange}
                   leyendaError="Debe ser huesped"
                   expresionRegular={expresiones.tipouser}
        
               />
               
<Input
                   estado={img}
                   cambiarEstado={cambiarImg}
                   tipo="text"
                   label="Insertar imagen:"
                   placeholder="Link de la imagen"
                   name="img"
                   value={data.img}
                        onChange={handleChange}
                   leyendaError="No es obligatorio"
                   expresionRegular={expresiones.img}
        
               />

          

     <ContenedorTerminos>
     <Label>
       <input 
       type="checkbox" 
       name="terminos" 
       id="terminos" 
       checked={terminos}
       onChange={onChangeTerminos}
       />
       Acepto Terminos y Condiciones
     </Label>
     </ContenedorTerminos>
     {formularioValido===false && <MensajeError>
       <p>
         <FontAwesomeIcon /><img src="https://img.icons8.com/ios-glyphs/30/000000/error--v1.png"/>
         <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
     </MensajeError>}
     <ContenedorBotonCentrado>
       <Boton tipo="submit">Enviar</Boton>
       {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
       
     </ContenedorBotonCentrado>
    
     </Formulario>
   </main>
   



);

}
export default Registro;
    {/*<div>
        <Container className=' my-5 p-4' style={{backgroundColor: '#B2B3B3', borderRadius: '8px'}}>
        <h1 className='CardRoomTitle mb-3'>Ingreso Nuevo Huésped</h1>

        <Form action="" onSubmit={onSubmit} 
            className='TextUserInfo'>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                        name="nombre"
                        value={data.nombre}
                        onChange={handleChange}
                        estado={nombre}
					    cambiarEstado={cambiarNombre}
                        leyendaError="El nombre solo puede contener letras y espacios."
					    expresionRegular={expresiones.nombre}
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


    <ContenedorTerminos>
      <Label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        checked={terminos}
        onChange={onChangeTerminos}
        />
        Acepto Terminos y Condiciones
      </Label>
      </ContenedorTerminos>
      {formularioValido===false && <MensajeError>
        <p>
           <img src="https://img.icons8.com/ios-glyphs/30/000000/error--v1.png"/>
          <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
      </MensajeError>}
      <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
        {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
      </ContenedorBotonCentrado>

            </Form>
        </Container>
    </div>
      */}