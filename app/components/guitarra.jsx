import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
  const { descripcion, imagen, precio, url, nombre } = guitarra;

  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link to={`/guitarras/${url}`}>enlace</Link>
      </div>
    </div>
  );
}

export default Guitarra;
