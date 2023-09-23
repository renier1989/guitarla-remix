export async function getPosts(){
    const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await res.json();
}