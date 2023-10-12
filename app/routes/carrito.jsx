import { useOutletContext } from "@remix-run/react";
import styles from "../styles/carrito.css";

export function meta() {
  return [
    { title: "GuitarLA - Carrito" },
    { name: "description", content: "GuitarLA - Carrito de compra" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Carrito() {
  const { carrito } = useOutletContext();
  console.log(carrito);
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>

          {carrito.length === 0
            ? "Carrito vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className="producto">
                  <div>
                    <img
                      src={producto.imagen}
                      alt={`imagen de la guitarra ${producto.nombre}`}
                    />
                  </div>
                  <div>
                    <p className="nombre">{producto.nombre}</p>
                    <p className="cantidad"> Cantidad: {producto.cantidad}</p>
                    <p className="precio">${producto.precio}</p>
                    <p className="subtotal">
                      Subtotal: ${producto.cantidad * producto.precio}
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <aside className="resumen">
          <h3>Resumen del pedido</h3>
          <p>Total a pagar: $999</p>
        </aside>
      </div>
    </main>
  );
}
