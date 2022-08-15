import { Card, Button} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";


function EditPassword({huesped,setUplist,upList,handleClose,handleOpen,setDataModal}){

    /*1. Crear petición asíncrona*/
  /*  const url="http://localhost:5000/estudiantes"; */
    const url="https://app-proyectohotelia.herokuapp.com/users/997512"; 

 /*2. Función para borrar un registro a partir del evento botón eliminar*/
 const handleDelete=async()=>{
        
    Swal.fire({
        title: 'Está seguro que desea eliminar este registro?',
        text: "No puedes revertir está acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:"Cancelar",
        confirmButtonText: 'Sí, Bórralo!'
      }).then((result) => {

        if (result.isConfirmed) {
            /*Eliminando de la BD */
            axios.delete(`${url}/${huesped.id}`).then((response)=>{
            console.log(response);
            
            /*Eliminando del estado */
              if (response.status === 200) {
                Swal.fire(
                    'Eliminado!',
                    `El estudiante ha sido eliminado exitosamente!`,
                    'success'
                )
                setUplist(!upList);
            }else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al eliminar el estudiante!',
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
        setDataModal(huesped);
    
}
    return(
        <div className="">
        
        
                <Button className="btn ReservUCardButtonEdit" onClick={handleEdit} >Editar Contraseña</Button>
       
        
        </div>
     
    );
}

export default EditPassword;