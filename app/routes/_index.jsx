import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import ListadoGuitarras from "../components/listado-guitarras";
import stylesGuitarras from "../styles/guitarras.css";
import ListadoPosts from "../components/listado-posts";
import stylesPosts from "../styles/blogs.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
  ];
}

export function meta() {}

export async function loader() {
  // esta es una opcion mas optimizada para llamar multiples apis , estas se ejecutan en simultaneo
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

  console.log(guitarras);
  console.log(posts);

  // esta seria la forma comun de llamar a dos apis, pero esta espera a que la primera termine de cargar luego la segunda carga los datos.
  // const guitarras = await getGuitarras();
  // console.log(guitarras);
  // const posts = await getPosts();
  // console.log(posts);

  return {
    guitarras: guitarras?.data,
    posts: posts?.data,
  };
}

function Index() {
  const { guitarras, posts } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />

        <section className="contenedor">
          <ListadoPosts posts={posts} />
        </section>
      </main>
    </>
  );
}

export default Index;
