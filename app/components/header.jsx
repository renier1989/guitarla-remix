import { Link, useLocation } from "@remix-run/react"
import logo from "../../public/img/logo.svg"
function Header() {
    const location = useLocation();
    console.log("🚀 ~ file: header.jsx:5 ~ Header ~ location:", location)
    
  return (
    <header className="header">
        <div className="contenedor barra">
        <div className="logo">
            <Link>
                <img src={logo} alt="imagen_logo" />
            </Link>
        </div>
        <nav className="navegacion">
            <Link to="/" className={location.pathname === '/' ? 'active': ''}>Inicio</Link>
            <Link to="/nosotros"className={location.pathname === '/nosotros' ? 'active': ''}>Nosotros</Link>
            <Link to="/tienda"className={location.pathname === '/tienda' ? 'active': ''}>Tienda</Link>
            <Link to="/blog"className={location.pathname === '/blog' ? 'active': ''}>Blog</Link>
        </nav>
        </div>
    </header>
  )
}

export default Header