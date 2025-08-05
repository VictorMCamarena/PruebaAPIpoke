import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Barra de navegación */}
      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Inicio</Link>
          <Link to="/about" className="hover:text-yellow-400">Acerca</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contacto</Link>
        </div>
      </nav>

      {/* Contenido de la página */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
