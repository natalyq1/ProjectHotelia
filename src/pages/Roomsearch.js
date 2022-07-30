import Navbar from "../components/c-navbar/Navbar";
import Formcheck from '../components/c-form-rooms/Form-room';
import Cardroom from '../components/c-card-room/Card-room';
import ModalroomD from '../components/c-modal-roomdetail/Modal-roomdetail';
import CallModal from '../components/c-modal-roomdetail/Modal-roomdetail';
import CardRoom2 from "../components/c-card-room/CardR2";
import Footer from '../components/footer/Footer';

function Roomsearch(){
    return(
        <>
        <Navbar />
        <Formcheck />
    {/*<Cardroom />*/}
    <CardRoom2 />
    <CallModal />
    
    <Footer />
        </>
        )
    }
    
    export default Roomsearch;