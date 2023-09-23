import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import Guitarra from "~/components/guitarra";
import styles from "~/styles/guitarras.css";

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

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

function Tienda() {
  const guitarras = useLoaderData();
  return (
    <main className="contenedor">
      <h2 className="heading"> Nuestra Colección</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Tienda;
