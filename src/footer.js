const Footer = (props) => {
  const numero = Math.floor(Math.random() * 3);

  return (
    <div>
      <h1>{props.libros[numero].titulo}</h1>
      <img src={props.libros[numero].img} alt="" />
    </div>
  );
};

export default Footer;
