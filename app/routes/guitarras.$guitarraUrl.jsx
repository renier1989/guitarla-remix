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
      </div>
    </div>
  );
}

export default Guitarra;
