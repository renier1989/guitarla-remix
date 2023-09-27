import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "../components/listado-guitarras";

export function meta(){
  return[
    {
      title: 'GuitarLa - Tienda',
    },
    {
      description : 'GuitarLa - Nuestra coleccion de guitarras',
    }
  ]
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

function Tienda() {
  const guitarras = useLoaderData();
  return (
    <div>
      <ListadoGuitarras
        guitarras={guitarras}
        />
    </div>
  );
}

export default Tienda;
