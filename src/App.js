import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
//import ReactDOM from 'react-dom/client';

function App() {
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

  return (
    <div className="App">
      <div>
        {list.map((item) => (
          <div key={item._id}>
            <h3>{item._id}</h3>
            <p>{item.fentrada}</p>
            <p>{item.fsalida}</p>
            <p>{item.cantidadNoches}</p>
            <p>{item.freserva}</p>
            <p>{item.nombrehab}</p>
            <p>${item.totalreserva}</p>
            <p>${item.totalreserva}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;