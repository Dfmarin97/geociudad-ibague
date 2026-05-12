export default function App() {
  const reportes = [
    {
      titulo: 'Hueco en vía principal',
      estado: 'Pendiente',
      ubicacion: 'Cra 5 con Calle 42',
    },
    {
      titulo: 'Falla alumbrado público',
      estado: 'En proceso',
      ubicacion: 'Barrio Jordán',
    },
    {
      titulo: 'Acumulación de residuos',
      estado: 'Solucionado',
      ubicacion: 'Parque Murillo Toro',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">GeoCiudad Ibagué</h1>
            <p className="text-sm opacity-80">Reporte ciudadano de problemáticas urbanas</p>
          </div>

          <nav className="flex gap-4">
            <button className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">
              Iniciar sesión
            </button>
            <button className="bg-blue-900 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">
              Registrarse
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Plataforma inteligente para reportar problemas urbanos
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Los ciudadanos podrán reportar incidencias urbanas,
            visualizar problemáticas en mapas interactivos y realizar
            seguimiento en tiempo real.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:scale-105 transition">
              Crear reporte
            </button>

            <button className="bg-white border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition">
              Ver mapa
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-4 border">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
            alt="Mapa"
            className="rounded-2xl h-[350px] w-full object-cover"
          />
        </div>
      </section>

      {/* Dashboard */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-3xl font-bold mb-8">Panel ciudadano</h3>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">Reportes totales</p>
            <h4 className="text-4xl font-bold mt-2">245</h4>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">Pendientes</p>
            <h4 className="text-4xl font-bold mt-2">86</h4>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">En proceso</p>
            <h4 className="text-4xl font-bold mt-2">103</h4>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">Solucionados</p>
            <h4 className="text-4xl font-bold mt-2">56</h4>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:col-span-1">
            <h4 className="text-2xl font-bold mb-6">Registrar incidencia</h4>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Título del problema"
                className="w-full border rounded-xl px-4 py-3"
              />

              <select className="w-full border rounded-xl px-4 py-3">
                <option>Seleccione categoría</option>
                <option>Huecos</option>
                <option>Alumbrado</option>
                <option>Basuras</option>
                <option>Espacios públicos</option>
              </select>

              <textarea
                placeholder="Descripción de la problemática"
                className="w-full border rounded-xl px-4 py-3 h-32"
              />

              <input
                type="file"
                className="w-full border rounded-xl px-4 py-3"
              />

              <button className="w-full bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Enviar reporte
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-3xl shadow-xl p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-2xl font-bold">Mapa georreferenciado</h4>

              <div className="flex gap-2">
                <button className="bg-gray-200 px-4 py-2 rounded-xl">
                  Filtrar
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-xl">
                  Actualizar
                </button>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1200&auto=format&fit=crop"
              alt="Mapa interactivo"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">Incidencias recientes</h3>

          <input
            type="text"
            placeholder="Buscar reporte"
            className="border rounded-xl px-4 py-3 w-72"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reportes.map((reporte, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold">{reporte.titulo}</h4>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {reporte.estado}
                </span>
              </div>

              <p className="text-gray-500 mb-4">{reporte.ubicacion}</p>

              <button className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-xl font-medium">
                Ver detalle
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Panel */}
      <section className="bg-gray-900 text-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-10">Panel Administrativo</h3>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Gestión de incidencias</h4>

              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-2xl flex justify-between items-center">
                  <span>Hueco en avenida principal</span>
                  <button className="bg-green-500 px-4 py-2 rounded-xl">
                    Resolver
                  </button>
                </div>

                <div className="bg-gray-700 p-4 rounded-2xl flex justify-between items-center">
                  <span>Basuras acumuladas</span>
                  <button className="bg-yellow-500 px-4 py-2 rounded-xl">
                    En proceso
                  </button>
                </div>

                <div className="bg-gray-700 p-4 rounded-2xl flex justify-between items-center">
                  <span>Falla de iluminación</span>
                  <button className="bg-red-500 px-4 py-2 rounded-xl">
                    Pendiente
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Estadísticas</h4>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Huecos</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Basuras</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full w-[45%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Alumbrado</span>
                    <span>30%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-yellow-500 h-4 rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 text-center">
        <p>
          Proyecto de grado — Plataforma Web Georreferenciada para el reporte ciudadano y gestión de problemáticas urbanas en Ibagué.
        </p>
      </footer>
    </div>
  );
}
