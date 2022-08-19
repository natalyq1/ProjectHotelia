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
		nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
		fnacimiento: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/, 
        // /^\d{7,14}$/, 
        tipodoc: /^[a-zA-ZÀ-ÿ\s]{6,40}$/, 
        _id: /^\d{7,14}$/,
        genero: /^[a-zA-ZÀ-ÿ\s]{8,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, // digito, mayuscula, minuscula // 5Unpocodet0d0
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        paisorigen: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        tipouser: /^huesped$/,
        img: /^[/#?]?.*$/,//una url
        // /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,//una url
        //[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]{2,}

	}

const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}
const navigate=useNavigate();
const [data,setData]=useState({_id:"",nombre:"",apellido:"",fnacimiento:"",tipodoc:"",genero:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});

const handleChange=({target})=>{
console.log(data)
    /*cada vez que exista un cambio se guarda el valor en el estado data*/
            setData({
                ...data,
                [target.name]:target.value
            })
        }

 const url="https://app-proyectohotelia.herokuapp.com/users";

 const onSubmit =(e)=>{
  e.preventDefault();
 
const response= axios.post(url,data);
        console.log(response)
        /*if(response.status===201){
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
        }*/
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
	cambiarNombre({campo:'',valido: 'null'});
    cambiarApellido({campo:'',valido:'null'});
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
    
    <h3 className='CardRoomTitle' style={{textAlign: 'center', marginTop: '10px'}}>Nuevo Huésped</h3>
    
     <Formulario action="" onSubmit={onSubmit}> 
     
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
					leyendaError="Debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula."
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
                   leyendaError="Debe ser una url, No es un campo obligatorio."
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
     <ContenedorBotonCentrado >
        <Boton className='ReservUCardButtonCancel'><Link to='/habitaciones' style={{textDecoration: 'none', color: 'white'}}>Cancelar</Link></Boton>
       <Boton className='ModalCancelButtonConfirm' href="/register#here" type="submit">Enviar</Boton>
       {formularioValido === true && <MensajeExito>¡Registro nuevo exitoso! <Link to='/habitaciones'>Salir</Link></MensajeExito>}
       
     </ContenedorBotonCentrado>
    
     </Formulario>
     <div id="here" style={{marginTop: '20px',color: 'none'}}>.</div>
   </main>
   



);

}
export default Registro;