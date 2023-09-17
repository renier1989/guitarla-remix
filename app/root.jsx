export default function App() {
  return <Document>Desde la app</Document>;
}

function Document({ children }) {
  return (
    <html lang="es">
      <title>GuitarLA - Remix</title>
      <body>{children}</body>
    </html>
  );
}
