import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  if(guitarra.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Guitarra no Encontrada',
    })
  }
  // console.log(guitarra.data.length);
  return guitarra;
}

export function meta({data}){

  if(!data){
    
    return[
      {
        title: `GuitarLa - Guitarra no encontrada`,
      },
      {
        name:'description',
        content: `GuitarLa - Venta de guitarras de nuestra mejor coleccion - Guitarra no encontrada`
      }
    ]
  }

  return[
    {
      title: `GuitarLa - ${data.data[0].attributes.nombre}`,
    },
    {
      name:'description',
      content: `GuitarLa - Venta de guitarras de nuestra mejor coleccion ${data.data[0].attributes.nombre}`
    }
  ]
}

function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  console.log(guitarra);
  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form className="formulario">
          <label htmlFor="cantidad" >Cantidad:</label>
          <select id="cantidad">
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default Guitarra;
