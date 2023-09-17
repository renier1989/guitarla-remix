import Navigation from "./navigation";

function Footer() {
  return (
    <footer>
        <Navigation/>
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer