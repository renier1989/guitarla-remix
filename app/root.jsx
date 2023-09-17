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
