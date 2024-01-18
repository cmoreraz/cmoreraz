import { Footer } from "@/components/ui/footer/footer"
import { NavBar } from "@/components/ui/navbar/navbar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-3">

            <div className="relative z-20 flex w-full flex-col  items-center justify-center gap-4">
                <NavBar />
            </div>

            {children}

        </main>
    )
}