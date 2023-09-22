import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";
export function meta() {
  return [{ title: "GuitarLA - Nosotros" }];
}
export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2>Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen de nosotros" />
        <div>
          <p>
            Nam aliquet suscipit nunc ut facilisis. Morbi vehicula, quam id
            lacinia dignissim, elit justo rutrum velit, accumsan consequat mi
            odio ut nisl. Sed tincidunt, eros non varius fringilla, enim mauris
            placerat lectus, vel rutrum odio dui a sem. Cras id nisi sit amet
            risus sollicitudin sodales. Aenean aliquam elementum ipsum vitae
            consectetur. Donec ultricies commodo orci. Vestibulum tempus turpis
            non felis varius maximus.
          </p>

          <p>
            Vivamus porta dignissim imperdiet. Morbi a tellus at est cursus
            suscipit. Praesent mattis sed nunc in tempus. Praesent bibendum ex
            nec porttitor rutrum. Nam rutrum molestie dui a tempus. Vestibulum
            at eleifend nibh, nec sollicitudin elit. Nullam consectetur, lectus
            eu sagittis efficitur, quam magna accumsan urna, in accumsan ipsum
            augue et enim.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
