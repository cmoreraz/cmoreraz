import Image from "next/image";
import { Card } from "../../../components/ui/cards/card";


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

                    <Card pathImage="./images/figma.webp" title="Figma" category="Design" href="https://figma.com/"/>
                    <Card pathImage="./images/nextjs.webp" title="Next.js" category="Web Framework" href="https://nextjs.org/"/>
                    <Card pathImage="./images/tailwindcss.webp" title="TailwindCSS" category="CSS" href="https://tailwindui.com/"/>
                    <Card pathImage="./images/github.webp" title="GitHub" category="Version Control" href="https://github.com/"/>
                    <Card pathImage="./images/git.webp" title="Git" category="Version Control" href="https://git-scm.com/"/>
                    <Card pathImage="./images/vscode.webp" title="VSCode" category="Editor" href="https://code.visualstudio.com/"/>
                    <Card pathImage="./images/typescript.webp" title="TypeScript" category="Language" href="https://www.typescriptlang.org/"/>
                    <Card pathImage="./images/java.webp" title="Java" category="Language" href="https://www.java.com/en/"/>
                    <Card pathImage="./images/python.webp" title="Python" category="Language" href="https://www.python.org/"/>
                    <Card pathImage="./images/spring.png" title="Spring Boot" category="Framework" href="https://spring.io/"/>
                    <Card pathImage="./images/react-hook-form.webp" title="React Hook Form" category="Library" href="https://www.react-hook-form.com/"/>
                    <Card pathImage="./images/mongodb.webp" title="PostgreSql" category="Database" href="https://www.postgresql.org/"/>
                    <Card pathImage="./images/postgressql.webp" title="MongoDB" category="Database" href="https://www.mongodb.com/"/>
                    <Card pathImage="./images/docker.webp" title="Docker" category="Kubernetes" href="https://www.docker.com/"/>
                    <Card pathImage="./images/jenkins.png" title="Jenkins" category="Kubernetes" href="https://www.jenkins.io/"/>
                    <Card pathImage="./images/vercel.webp" title="Vercel" category="Deployment" href="https://vercel.com/"/>

                </div>

            </section>
        </div>
    )
}

export default Stack;