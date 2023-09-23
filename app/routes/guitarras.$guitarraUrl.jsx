import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '~/models/guitarras.server'

export async function loader({params}){
  const {guitarraUrl} = params;
  const guitarra = await getGuitarra(guitarraUrl);
  // console.log(guitarra);
  return guitarra;
}

function Guitarra() {
  const guitarra = useLoaderData();
  console.log(guitarra);
  return (
    <div>GuitarraUrl</div>
  )
}

export default Guitarra