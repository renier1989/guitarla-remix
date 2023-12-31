import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export const meta = () => {
  return [
    {
      viewport: "width=device-width,initial-scale=1",
    },
    { title: "GuitarLA - Remix" },
    {
      charset: "charset",
    },
  ];
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Poppins:wght@400;500;600;700;800&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {


  // const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
  const [carrito, setCarrito] = useState([]);

  useEffect(()=>{
    if(carrito.length === 0) return;
    localStorage.setItem('carrito', JSON.stringify(carrito));    
  },[carrito]);

  useEffect(()=>{
    const carritoLS = JSON.parse(localStorage.getItem('carrito')?? []);
    setCarrito(carritoLS);
  },[])


  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      console.log("ya existe este item en el carrito");
      const carritoActualizado = carrito.map((guitarraNewState) => {
        if (guitarraNewState.id === guitarra.id) {
          // modifica la cantidad del item que ya esta en el carrito
          guitarraNewState.cantidad = guitarra.cantidad;
        }
        return guitarraNewState;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    
    const carritoActualizado = carrito.map(guitarraState =>{
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });

    setCarrito(carritoActualizado);

  };

  const eliminarProducto = id => {
    const carritoActulizado = carrito.filter(guitarraState => guitarraState.id !== id);
    carritoActulizado.length === 0 && localStorage.setItem('carrito',[]);
    setCarrito(carritoActulizado);
  }

  return (
    <Document>
      <Outlet context={{ agregarCarrito, carrito, actualizarCantidad, eliminarProducto }} />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// MANEJO DE ERRORES

export function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} {error.statusText}
        </p>
        <Link to="/" className="error-enlace">
          Volver al inicio
        </Link>
      </Document>
    );
  }
}
