import Image from "next/image";

const Stack = () => {
    return (
        <section id="stack"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
            <div className="mx-auto flex max-w-[58rem] flex-col space-y-4">
                <h2 className="text-3xl font-bold text-onyx dark:text-white md:text-5xl">
                    Dev & Design
                </h2>
            </div>

            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="Figma" src="./images/figma.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                                Figma
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                                Design
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/nextjs.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                                Next.js
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                                Web Framework
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/tailwindcss.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                            TailwindCSS
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                                CSS
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/github.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                            GitHub
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                            Version Control
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/vercel.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                            Vercel
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                            Deployment
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/vscode.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                            VSCode
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                            Editor
                            </span>
                        </div>
                    </a>
                </div>


                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/typescript.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                            TypeScript
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                            Language
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/java.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                            Java
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                            Language
                            </span>
                        </div>
                    </a>
                </div>


                <div className="flex h-[300px] flex-col justify-between rounded-md p-6 dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4">
                    <a aria-label="Figma" target="_blank" className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6" href="https://figma.com/">

                        <picture className="relative block h-[180px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
                            <Image width={100} height={100} alt="NextJs" src="./images/react-hook-form.webp" />
                        </picture>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block">
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>

                        <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
                            <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
                            React Hook Form
                            </p>
                            <span className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm">
                            Library
                            </span>
                        </div>
                    </a>
                </div>

                
            </div>
            <div className="mx-auto flex justify-center text-center md:max-w-[58rem]">

            </div>
            <div className="relative mx-auto flex justify-center text-center md:max-w-[58rem]">

            </div>
        </section>
    )
}

export default Stack;