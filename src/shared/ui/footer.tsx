export default function Footer() {
    return (
        <footer className="bg-gray-950 w-full py-4 px-6 flex items-center justify-center shadow-2xl border-b border-gray-600 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
                <p className="text-sm md:text-base">
                    © 2026 MetaFlux App. Todos los derechos reservados.
                </p>

                <p className="text-xs md:text-sm text-gray-400 flex flex-col md:flex-row justify-center gap-1 md:gap-3">
                    <span>Juan Fernando Orjuela Samaca</span>
                    <span className="hidden md:inline">|</span>
                    <span>Milton Andres Novoa Gutierrez</span>
                </p>
            </div>
        </footer>
    )
}