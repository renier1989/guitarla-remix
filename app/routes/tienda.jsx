// $2a$10$klP5caXmg/60/SJN3c8AuOjLzAD0jLJzI9xcD4vgTD7K87jLjQOJO

export async function loader(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const resultado = await respuesta.json();
  console.log(process.env.API_URL , resultado);
  return {}
}

function Tienda() {
  return (
    <div>Tienda</div>
  )
}

export default Tienda