import Image from "next/image";
import { Card } from "../../../components/ui/cards/card"
import { Arrow } from "@/components/ui/cards/arrow/arrow";


const Stack = () => {
    return (

        <div className="flex min-h-screen flex-col items-center justify-between p-3">
            <section id="stack"
                className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col space-y-4">
                    <h2 className="text-3xl font-bold text-onyx dark:text-white md:text-5xl">
                        Dev & Design
                    </h2>
                </div>

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">


                    <Card pathImage="./images/figma.webp" title="Figma" category="Design" />
                    <Card pathImage="./images/nextjs.webp" title="Next.js" category="Web Framework" />
                    <Card pathImage="./images/tailwindcss.webp" title="TailwindCSS" category="CSS" />
                    <Card pathImage="./images/github.webp" title="GitHub" category="Version Control" />
                    <Card pathImage="./images/vercel.webp" title="Vercel" category="Deployment" />
                    <Card pathImage="./images/vscode.webp" title="VSCode" category="Editor" />
                    <Card pathImage="./images/typescript.webp" title="TypeScript" category="Language" />
                    <Card pathImage="./images/java.webp" title="Java" category="Language" />
                    <Card pathImage="./images/python.webp" title="Python" category="Language" />
                    <Card pathImage="./images/react-hook-form.webp" title="React Hook Form" category="Library" />
                    <Card pathImage="./images/mongodb.webp" title="PostgreSql" category="Database" />
                    <Card pathImage="./images/postgressql.webp" title="MongoDB" category="Database" />

                </div>
                <div className="mx-auto flex justify-center text-center md:max-w-[58rem]">

                </div>
                <div className="relative mx-auto flex justify-center text-center md:max-w-[58rem]">

                </div>
            </section>
        </div>
    )
}

export default Stack;