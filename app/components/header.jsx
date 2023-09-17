import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Navigation from "./navigation";
function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
        <div className="logo">
          <Link>
            <img src={logo} alt="imagen_logo" />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
