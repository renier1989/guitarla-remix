import { useLoaderData } from "react-router";
import {getPost} from "../models/posts.server"
import {formatearFecha} from "../utils/helpers"

export async function loader({params}){
    const {postUrl} = params;
    const post = await getPost(postUrl);
    
    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post no Encontrado'
        })
    }
    return post?.data[0]?.attributes;
}

export function meta({data}){

    
    if(!data){
        return[
            {
                title: `GuitarLa - Blog no encontrado`,
            },
            {
                name: 'description',
                content: `GuitarLa - contenido de este blog de tiendas de guitarras no encontrado`
            }
        ]
    }

    const {titulo} =  data;
    
    return[
        {
            title: `GuitarLa - Blog ${titulo}`,
        },
        {
            name: 'description',
            content: `GuitarLa - contenido de este blog de tiendas de guitarras ${titulo}`
        }
    ]
}


export default function Post() {
    const post = useLoaderData();
    const {contenido, imagen, titulo, publishedAt} = post
    
  return (
    <div className="post mt-3">
        <img src={imagen?.data?.attributes?.url} alt={`Imagen del post ${titulo}`} />
        <h3 className="heading">{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
    </div>
  )
}
