import { Link } from "react-router-dom";
import { Container, Form, Modal, Row, Col} from "react-bootstrap";
import ListHost from "../../components/userInfo/ListUser";
import MenuDashboard from "../../components/dash-viewreservationuser/menudash/Menu-dashB";
import Listrooms from "../../components/dash-viewreservationuser/barlookup/BarLookup";



function User() {
    return(

        <>
        <Container >
            <Row>
                <Col xs={3}>
                    <MenuDashboard />
                </Col>


                <Col >
                    <Listrooms />
                    

<ListHost />



 
                </Col> </Row>

       </Container>
        </>
    )
}
export default User;