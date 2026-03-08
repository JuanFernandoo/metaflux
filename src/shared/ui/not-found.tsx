import { Link } from "@tanstack/react-router";

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-gray-950 text-white p-16">

            <img src="/notfound.png" alt="Página no encontrada" className="max-w-md w-full mb-6" />

            <h1 className="text-3xl"> Oops... algo salió mal</h1>

            <p className="text-gray-400 mb-6 mt-6">La página que buscas no existe o el filtro no encontró resultados.</p>

            <Link
                to="/"
                search={{ page: 1 }}
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
            >
                Volver al inicio
            </Link>
        </div>
    )
}
