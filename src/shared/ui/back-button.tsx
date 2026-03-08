export function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="text-sm text-zinc-400 hover:text-white mb-4"
        >
            ← Volver
        </button>
    )
}