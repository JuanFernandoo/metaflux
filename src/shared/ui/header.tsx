import { Link } from "@tanstack/react-router";

export function Header() {
    return (
        <header className="bg-gray-950 w-full py-4 px-6 flex items-center justify-center shadow-2xl border-b border-gray-600 sticky top-0 z-50">
            <Link
                to="/"
                search={{ page: 1 }}
            >
                <img
                    src="/MFbrand.png"
                    alt="Logo MF"
                    className="h-10 sm:h-12 md:h-14 cursor-pointer"
                />
            </Link>
        </header>
    )
}