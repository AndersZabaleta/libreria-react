import { useState } from "react";

const Main = (props) => {
  const [stock, setStock] = useState(props.stock);
  const restar = () => {
    setStock(stock - 1);
  };
  if (stock === 0) {
    return (
      <div>
        <h1>{props.titulo}</h1>
        <img src={props.img} alt="" />
        <p>{props.descripcion}</p>
        <p>{props.editorial}</p>
        <p>{props.autor}</p>
        <p>No quedan unidades</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.titulo}</h1>
        <img src={props.img} alt="" />
        <p>{props.descripcion}</p>
        <p>{props.editorial}</p>
        <p>{props.autor}</p>
        <p>{stock}</p>
        <button onClick={restar}>Comprar</button>
      </div>
    );
  }
};

export default Main;
