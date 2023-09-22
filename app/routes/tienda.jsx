import { getGuitarras } from '~/models/guitarras.server';

export async function loader(){
  const guitarras = await getGuitarras();
  console.log(guitarras);
  return {}
}

function Tienda() {
  return (
    <div>Tienda</div>
  )
}

export default Tienda