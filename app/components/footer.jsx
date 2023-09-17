import Navigation from "./navigation";

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <Navigation />
        <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
