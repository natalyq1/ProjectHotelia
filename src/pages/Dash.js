import MenuDashboard from "../components/dash-viewreservationuser/menudash/Menu-dashB";
import Listrooms from "../components/dash-viewreservationuser/barlookup/BarLookup";
import Reservation2 from '../components/reserv-user copy/Reser2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
function Dash2() {
    return (
        <div>
            <Container >
                <Row>
                    <Col xs={3}>
                        <MenuDashboard />
                    </Col>


                    <Col >
                        <Listrooms />
                        <Container className="container-fluid">
                            <Row>
                                <Col >

                                    <Reservation2 />
                                </Col>
                            </Row>
                        </Container>
                    </Col> </Row>

            </Container>
        </div>
    );
}

export default Dash2;