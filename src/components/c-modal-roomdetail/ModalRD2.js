
import Room1 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-7649103.jpg'
import Room2 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-5179592.jpg'


import './Modal-roomdetail.css';

import {Container, Form, Modal, Row, Col, Button, Card} from 'react-bootstrap';
import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import ModalroomD from '../c-modal-roomdetail/Modal-roomdetail';
  

function ModalRD2() {

    {/*const [list, setList] = useState([]);
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

    
        
  
        /*5.(hook)UseState para refrescar el listado despues de eliminar
        const [upList,setUplist]=useState([false]);*/
  
        /*agregar una constante para actualizar el estado del modal
  
        const [show,setShow]=useState(false);
  
        const handleClose=()=>{setShow(false);}
        const handleOpen=()=>{setShow(true);}*/
  
        /* estado para obtener los datos del registro que se edita
        const [dataModal, setDataModal] = useState({})*/
  
            /*handle Submit handleChangeModal
            const handleChangeModal=({target})=>{
                setDataModal({
                    ...dataModal,
                    [target.name]: target.value
                })
            }*/}
      
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
                const [upList,setUplist]=useState([false]);
          
                /*agregar una constante para actualizar el estado del modal*/
          
                const [show,setShow]=useState(false);
          
                const handleClose=()=>{setShow(false);}
                const handleOpen=()=>{setShow(true);}
          
                /* estado para obtener los datos del registro que se edita*/
                const [dataModal, setDataModal] = useState({})
          
                    /*handle Submit handleChangeModal*/
                    const handleChangeModal=({target})=>{
                        setDataModal({
                            ...dataModal,
                            [target.name]: target.value
                        })
                    }
          

  return (
    <><Container> 





     
             {list.map((itemrd, indexrd)=>(
                 <ModalroomD
                 itemrd={itemrd} 
                 key={itemrd._id}
                 habitaciones={indexrd}
                 reservas={indexrd}
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

export default ModalRD2;