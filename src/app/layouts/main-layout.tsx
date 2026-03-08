import Footer from "@/shared/ui/footer"
import { Header } from "@/shared/ui/header"
import { Outlet } from "@tanstack/react-router"

export function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-950 text-white">
            <Header />
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}
