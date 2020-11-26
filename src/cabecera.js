import { useState } from "react";

const Cabecera = (props) => {
  const [vip, setVip] = useState(props.vip);

  const cambiarVip = () => {
    if (vip === true) {
      setVip(false);
    } else {
      setVip(true);
    }
  };

  if (vip === true) {
    return (
      <div>
        <h1>Hola {props.nombre}</h1>
        <img src={props.imagen} alt="" />
        <button onClick={cambiarVip}>Vip</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.nombre}</h1>
        <img src={props.imagen} alt="" />
        <button onClick={cambiarVip}>Vip</button>
      </div>
    );
  }
};

export default Cabecera;
