import Room1 from '../../assets/imgs-rooms/pexel/pexels-christopher-moon-7649103.jpg'

import {Container, Form, Modal, Row, Col, Button, Card} from 'react-bootstrap';

import { useEffect, useState } from "react";

import Axios from "axios";
import axios from "axios";

import Modalcancelreservation from '../c-modal-cancelation/Modal-cancelation';
import Modalconfirmreservation from '../c-modal-cancelation/Modal-confirmation';


import './Reservation-user.css';
function CardReservation({reservas,habitaciones,setUplist,upList,handleClose,handleOpen,setDataModal,setShow,handleShow}) {

 /*FUNCIÓN ASÍNCRONA*/
    /*1.Definir url de api a la que me voy a conectar*/
    const url="https://app-proyectohotelia.herokuapp.com/reservas";

    /*2. Función para borrar un registro a partir del evento botón eliminar*/
    const handleDelete=async()=>{
        
        window.prompt({
             title:'Está seguro que desea eliminar este registro?'  
          }).then((result) => {

            if (result.isConfirmed) {
                /*Eliminando de la BD */
                axios.delete(`${url}/${reservas.id,habitaciones.id}`).then((response)=>{
                console.log(response);
                
                /*Eliminando del estado */
                  if (response.status === 200) {
                    prompt(
                        "cancelando"
                    )
                    setUplist(!upList);
                }else {
                    window.prompt(
                        'Error!',
                        'Hubo un problema al eliminar el reservas!',
                        'error'
                    )
                }
       });
            }
        
          })
        
        
    }

    /*3. Función para editar un registro*/
    const handleEdit=()=>{
        handleOpen();
        setDataModal(reservas, habitaciones);
    }

    
   
return(


<>

        <section className='ReservUCardContainer' >
          
       <Container className='container-fluid row-fluid'>
<Card className='ReservUCardBackground' style={{ height: 'fit-content' }}>
              <Card.Img variant="top" className='ReservUCardImage' style={{ maxHeight: '220px' }} src={Room1} />
              <Card.Body>
              <div className='ReservUCardCopPrice' style={{ color: 'black' }}>
                  <h5 >
                    Estado: <br />
                  </h5>
                  <h5>
                  Reservada
                  </h5>
                </div>
                <Card.Title className='ReservUCardTitle' style={{ textAlign: 'center' }}>Twin superior</Card.Title>
                <p className='ReservUCardDescriptiveText' style={{ margin: '0.5em' }}>La Habitación cuenta con cama doble tipo Queen donde podrás disfrutar de LCD de 40'' con Direct Tv, internet sin costo, escritorio, caja de seguridad, room service, entre otros servicios. </p>


                <div className='ReservUCardCopPrice'>
                  <h4 >
                    COP<br />
                  </h4>
                  <h4>
                  ${reservas.totalreserva}
                  </h4>
                </div>

                <div className='ReservUCardArrivalDeparture'>
                  <div className=" formbuilder-date form-group field-date-1656631465827">
                    <label htmlFor=" date-1656631465827" className="ReservUCardFontNigthAdultKid formbuilder-date-label">Llegada</label>
                    <input type="text" className="form-control" name="date-1656631460786" access="false" id="date-1656631460786" placeholder={reservas.fentrada.substring(0,10)} ></input>
                  </div>
                 
                  <div className=" formbuilder-date form-group field-date-1656631460786">
                    <label htmlFor="date-1656631460786" className="ReservUCardFontNigthAdultKid formbuilder-date-label">Salida</label>
                    <input type="text" className="form-control" name="date-1656631460786" access="false" id="date-1656631460786" placeholder={reservas.fsalida.substring(0,10)} ></input>
                  </div>
                </div>

                <div className='ReservUCardNigthAdultKid' style={{ marginTop: '10px' }}>
                <p className='ReservUCardFontNigthAdultKid'>
                    <img src="https://img.icons8.com/material-outlined/24/000000/date-span.png" style={{ width: '', height: '20px' }}/>  {reservas.cantidadNoches} Días
                  </p>
                  <p className='ReservUCardFontNigthAdultKid'>
                    <img src="https://img.icons8.com/material-rounded/24/000000/conference-call.png" style={{ width: '', height: '20px' }} /> 1 Adultos
                  </p>
                  <p className='ReservUCardFontNigthAdultKid'>
                    <img src="https://img.icons8.com/material-rounded/24/000000/user.png" style={{ width: '', height: '20px' }} /> 1 Niños
                  </p>
                </div>


                <section className='ReservUCardBoxDetails'>
                  <div className='ReservUCardMarginBoxDetails'>

                    <Container>

                      <Row>
                        <Col><p className='ReservUCardFontNigthAdultKid'>
                          <img src="https://img.icons8.com/material-outlined/24/000000/wifi--v1.png" style={{ width: '', height: '20px' }} /> Wifi
                        </p>
                          <p className='ReservUCardFontNigthAdultKid'>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/000000/balcony.png" style={{ width: '', height: '20px' }} /> Balcón
                          </p>
                          <p className='ReservUCardFontNigthAdultKid'>
                            <img src="https://img.icons8.com/ios/50/000000/toilet.png" style={{ width: '', height: '20px' }} /> Baño privado
                          </p>
                          <p className='ReservUCardFontNigthAdultKid'>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/air-conditioner.png" style={{ width: '', height: '20px' }} /> Aire acondicionado
                          </p>
                        </Col>
                        <Col><p className='ReservUCardFontNigthAdultKid'>
                          <img src="https://img.icons8.com/ios-glyphs/30/000000/wheelchair.png" style={{ width: '', height: '20px' }} /> Accesibilidad
                        </p>
                          <p className='ReservUCardFontNigthAdultKid'>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/000000/elevator.png" style={{ width: '', height: '20px' }} /> Ascensor
                          </p>
                          <p className='ReservUCardFontNigthAdultKid'>
                            <img src="https://img.icons8.com/material-rounded/24/000000/tv-show.png" style={{ width: '', height: '20px' }} /> Televisión
                          </p>
                        </Col>
                        <Col><p className='ReservUCardFontNigthAdultKid'>
                          <img src="https://img.icons8.com/windows/32/000000/safe-ok.png" style={{ width: '', height: '20px' }} /> Caja fuerte
                        </p>
                          <p className='ReservUCardFontNigthAdultKid'>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/fridge.png" style={{ width: '', height: '20px' }} /> Nevera
                          </p>
                          <p className='ReservUCardFontNigthAdultKid'>
                            <img src="https://img.icons8.com/material-outlined/24/000000/parking-ticket--v1.png" style={{ width: '', height: '20px' }} /> Parqueadero
                          </p>
                        </Col>
                      </Row>
                    </Container>

                  </div>
                </section>
                <article className="ReservUCardContainerButtons">
              <Modalconfirmreservation/ >
                  
              <Modalcancelreservation/>  
              </article>
              </Card.Body>
            </Card>
  
            
            </Container>

</section>
            
          </>
        

);
}
export default CardReservation;