export async function getPosts(){
    const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await res.json();
}

export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json();
}