import Image from "next/image";
import { Card } from "../../../components/ui/cards/card";

const dev = [
    {
        title: "Figma",
        category: "Design",
        href: "https://figma.com/",
        pathImage: "./images/figma.webp"
    },
    {
        title: "Next.js",
        category: "Web Framework",
        href: "https://nextjs.org/",
        pathImage: "./images/nextjs.webp"
    },
    {
        title: "GitHub",
        category: "Version Control",
        href: "https://github.com/",
        pathImage: "./images/github.webp"
    },
    {
        pathImage: "./images/git.webp",
        title: "Git",
        category: "Version Control",
        href: "https://git-scm.com/"
    },
    {
        pathImage: "./images/vscode.webp",
        title: "VSCode",
        category: "Editor",
        href: "https://code.visualstudio.com/"
    },
    {
        pathImage: "./images/typescript.webp",
        title: "TypeScript",
        category: "Language",
        href: "https://www.typescriptlang.org/"
    },
    {
        pathImage: "./images/java.webp",
        title: "Java",
        category: "Language",
        href: "https://www.java.com/en/"
    },
    {
        pathImage: "./images/python.webp",
        title: "Python",
        category: "Language",
        href: "https://www.python.org/"
    },
    {
        pathImage: "./images/spring.png",
        title: "Spring Boot",
        category: "Framework",
        href: "https://spring.io/"
    },
    {
        pathImage: "./images/react-hook-form.webp",
        title: "React Hook Form",
        category: "Library",
        href: "https://www.react-hook-form.com/"
    },
    {
        pathImage: "./images/postgressql.webp",
        title: "PostgreSql",
        category: "Database",
        href: "https://www.postgresql.org/"
    },
    {
        pathImage: "./images/mongodb.webp",
        title: "MongoDB",
        category: "Database",
        href: "https://www.mongodb.com/"
    },
    {
        pathImage: "./images/docker.webp",
        title: "Docker",
        category: "Kubernetes",
        href: "https://www.docker.com/"
    },
    {
        pathImage: "./images/jenkins.png",
        title: "Jenkins",
        category: "Kubernetes",
        href: "https://www.jenkins.io/"
    },
    {
        pathImage: "./images/vercel.webp",
        title: "Vercel",
        category: "Deployment",
        href: "https://vercel.com/"
    }

]

const apps = [
    {
        pathImage: "./images/jira.webp",
        title: "Jira",
        category: "Productivity",
        href: "https://www.atlassian.com/"
    },
    {
        pathImage: "./images/todoist.webp",
        title: "Todoist",
        category: "Productivity",
        href: "https://todoist.com/"
    },
    {
        pathImage: "./images/notion.webp",
        title: "Notion",
        category: "Notes",
        href: "https://www.notion.so/"
    },
    {
        pathImage: "./images/chatgpt.webp",
        title: "ChatGPT",
        category: "Productivity",
        href: "https://chat.openai.com/"
    },
    {
        pathImage: "./images/duolingo.webp",
        title: "Duolingo",
        category: "Education",
        href: "https://www.duolingo.com/"
    },
    {
        pathImage: "./images/books.webp",
        title: "Books",
        category: "Education",
        href: "https://www.apple.com/apple-books/"
    },
    {
        pathImage: "./images/slack.webp",
        title: "Slack",
        category: "Comunication",
        href: "https://slack.com/"
    },
    {
        pathImage: "./images/discord.webp",
        title: "Discord",
        category: "Comunication",
        href: "https://discord.com/"
    },
    {
        pathImage: "./images/twitch.webp",
        title: "Twitch",
        category: "Entertainment",
        href: "https://www.twitch.tv/"
    }
]

const Stack = () => {
    return (

        <div className="container-body">
            <section id="stack"
                className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col space-y-4">
                    <h2 className="text-3xl font-bold text-onyx dark:text-white md:text-5xl">
                        Dev & Design
                    </h2>
                </div>

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    {
                        dev.map((item, index) => (
                            <Card key={index} pathImage={item.pathImage} title={item.title} category={item.category} href={item.href} />
                        ))
                    }

                </div>

                <div className="mx-auto flex max-w-[58rem] flex-col space-y-4">
                    <h2 className="text-3xl font-bold text-onyx dark:text-white md:text-5xl">
                        Apps
                    </h2>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                    {
                        apps.map((item, index) => (
                            <Card key={index} pathImage={item.pathImage} title={item.title} category={item.category} href={item.href} />
                        ))
                    }

                </div>

            </section>
        </div>
    )
}

export default Stack;