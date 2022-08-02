import './Form-room.css'
import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';

function Formcheck() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <form className='FormLookupRoom'>

                <div className="FormLookupTitle">Consultar disponibilidad</div>
                <div className="rendered-form">

                    <article className='FormLookupDisplay'>
                        <div className=" formbuilder-date form-group field-date-1656631465827">
                            <label htmlFor=" date-1656631465827" className="FormLookupFontName formbuilder-date-label">Llegada</label>
                            <input type="date" className="FormLookupArrival form-control" name="date-1656631465827" access="false" id="date-1656631465827" required="required" />
                        </div>
                        <div className=" formbuilder-date form-group field-date-1656631460786">
                            <label htmlFor="date-1656631460786" className="FormLookupFontName formbuilder-date-label">Salida</label>
                            <input type="date" className="FormLookupDeparture form-control" name="date-1656631460786" access="false" id="date-1656631460786" required="required" />
                        </div>
                        <div className="formbuilder-number form-group field-number-1656631483892">
                            <label htmlFor="number-1656631483892" className="FormLookupFontName formbuilder-number-label">Adultos</label>
                            <input type="number" className="FormLookupAdults form-control" name="number-1656631483892" access="false" min="1" max="30" id="number-1656631483892" required="required" />
                        </div>
                        <div className="formbuilder-number form-group field-number-1656631757629">
                            <label htmlFor="number-1656631757629" className="FormLookupFontName formbuilder-number-label">Niños</label>
                            <input type="number" className="FormLookupKids form-control" name="number-1656631757629" access="false" min="0" max="8" id="number-1656631757629" />
                        </div>


                    </article>
                    <section className="FormLookupContainerButton">
                        <Button type="submit" className=" FormLookupButton " onClick={handleShow}>Ver habitaciones disponibles</Button>

                    </section>

                </div>

            </form>
        </>

    );
}

export default Formcheck;
