import { Meta } from "@remix-run/react";

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

export default function App() {
  return <Document>Desde la app</Document>;
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
      </head>
      <body>{children}</body>
    </html>
  );
}
