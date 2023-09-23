import { Link } from "@remix-run/react";

export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  const imagenP = imagen.data.attributes.formats.small.url;
  return (
    <article className="post">
      <img className="imagen" src={imagenP} alt={`Imagen del post ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{publishedAt}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`posts/${url}`}>Ver Articulo</Link>
      </div>
    </article>
  );
}
