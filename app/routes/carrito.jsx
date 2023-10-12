import { useOutletContext } from "@remix-run/react";
import styles from "../styles/carrito.css";
import { useEffect, useState } from "react";

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
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad } = useOutletContext();
  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]);

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
                    {/* <p className="cantidad"> Cantidad: {producto.cantidad}</p> */}
                    <p className="cantidad"> Cantidad:</p>
                    <select
                      value={producto.cantidad}
                      className="select"
                      onChange={(e) =>
                        actualizarCantidad({
                          cantidad: +e.target.value,
                          id: producto.id,
                        })
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
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
          <p>Total a pagar: ${total}</p>
        </aside>
      </div>
    </main>
  );
}
