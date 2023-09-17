import { Links, Meta } from "@remix-run/react";
import styles from "./styles/index.css"

export const meta = () => {
  return [
    {
      viewport: "width=device-width,initial-scale=1",
    },
    { title: "New Remix App" },
    {
      charset: "charset",
    },
  ];
};

export function links(){
  return([
    {
      rel:"stylesheet",
      href:"https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href:"https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href:"https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Poppins:wght@400;500;600;700;800&display=swap"
    },
    {
      rel:"stylesheet",
      href:styles
    }
  ]);
}

export default function App() {
  return <Document>Desde la app</Document>;
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links/>
      </head>
      <body>{children}</body>
    </html>
  );
}
