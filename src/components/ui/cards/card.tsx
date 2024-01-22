import Image from "next/image";
import { Arrow } from "./arrow/arrow";

interface Props {
    pathImage: string
    title: string
    category: string
    href: string
}

export const Card = ({ pathImage, title, category, href }: Props) => {
    return (
        <div className="flex w-[350px] h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
            <a aria-label={title} target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6 border-zinc-900 bg-zinc-900" href={href}>

                <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                    <Image width={100} height={100} alt={title} src={pathImage} />
                </picture>

                <Arrow />

                <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                    <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                        {title}
                    </p>
                    <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                        {category}
                    </span>
                </div>
            </a>
        </div>
    );
}