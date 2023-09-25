import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getCurso } from "../models/curso.server";
import { getPosts } from "../models/posts.server";
import ListadoGuitarras from "../components/listado-guitarras";
import stylesGuitarras from "../styles/guitarras.css";
import stylesCurso from "../styles/curso.css";
import ListadoPosts from "../components/listado-posts";
import stylesPosts from "../styles/blogs.css";
import Curso from "../components/curso";

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
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export function meta() {}

export async function loader() {
  // esta es una opcion mas optimizada para llamar multiples apis , estas se ejecutan en simultaneo
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  // console.log(guitarras);
  // console.log(posts);
  // console.log(curso);

  // esta seria la forma comun de llamar a dos apis, pero esta espera a que la primera termine de cargar luego la segunda carga los datos.
  // const guitarras = await getGuitarras();
  // console.log(guitarras);
  // const posts = await getPosts();
  // console.log(posts);

  return {
    guitarras: guitarras?.data,
    posts: posts?.data,
    curso: curso?.data,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}

export default Index;
