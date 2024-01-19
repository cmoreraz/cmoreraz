import Image from "next/image";

const Stack = () => {
    return (
        <section
            id="stack"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
            <div className="mx-auto flex max-w-[58rem] flex-col space-y-4">
                <h2 className="text-3xl font-bold text-onyx dark:text-white md:text-5xl">
                    Dev & Design
                </h2>
            </div>

            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6">
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

                <div className="flex h-[300px] flex-col justify-between rounded-md p-6">
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


                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        {
                            /**
                             *  <AWSIcon />
                             */
                        }
                        <div className="space-y-2">
                            <h3 className="font-bold">Servers and Deploy</h3>
                            <p className="text-sm text-muted-foreground">
                                AWS, GCP, Vercel, RailWay
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <svg
                            version="1.0"
                            className="h-12 w-12 fill-current"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <g clipPath="url(#clip0_121_3668)">
                                <path d="M7.14132 0.190091L6.94971 0.380183L6.97526 4.09964C7.0008 8.19928 6.99442 8.10424 7.44152 9.4729C8.45709 12.5587 11.1333 15.0489 14.3269 15.8726C15.2148 16.1008 15.8407 16.1641 17.5078 16.2085L19.0279 16.2528L19.2259 16.4556C19.392 16.6203 19.4367 16.7154 19.4559 16.9942C19.4878 17.4061 19.3281 17.7039 18.996 17.8433C18.6191 17.9953 15.6619 17.951 14.8954 17.7736C14.7996 17.7546 14.7038 17.7862 14.6144 17.8749C14.4866 18.0017 14.4802 18.0397 14.5058 20.1054C14.5313 22.1393 14.5377 22.2217 14.6846 22.5892C14.889 23.1088 15.4128 23.6284 15.9174 23.8185C16.6647 24.0909 18.3892 24.0529 19.5134 23.7298C21.3976 23.1848 22.9497 21.7401 23.6267 19.9089C24.0163 18.8507 24.0163 18.7937 23.9908 13.5789C23.9716 8.94064 23.9652 8.82658 23.8247 8.20562C23.3393 6.05125 22.3557 4.29607 20.81 2.81969C19.2515 1.33698 17.3609 0.418201 15.2275 0.0950456C14.7166 0.019009 13.8607 -1.99871e-07 10.9609 -1.99871e-07H7.32655L7.14132 0.190091ZM18.5872 10.1446C19.1301 10.3093 19.5325 10.8416 19.5389 11.4118C19.5389 11.811 19.2834 12.2926 18.9513 12.5207C18.715 12.6854 18.6319 12.7045 18.1976 12.7045C17.7633 12.7045 17.6802 12.6854 17.4439 12.5207C16.9138 12.1595 16.7158 11.4182 16.9904 10.8542C17.2842 10.2523 17.9485 9.9608 18.5872 10.1446Z" />
                                <path d="M1.29049 1.30541C0.926416 1.43847 0.447375 1.87568 0.217436 2.29389L0.0258192 2.62971L0.00665759 8.64928C-0.012504 15.1504 -0.012504 15.2328 0.326018 16.2846C1.05416 18.5657 2.87452 20.4033 5.15475 21.1636C6.132 21.4868 6.65575 21.5438 8.68688 21.5438C10.9032 21.5438 11.0182 21.5185 11.6633 20.8785C12.2446 20.3019 12.3212 20.0041 12.3212 18.382C12.3212 17.6976 12.2957 17.1084 12.2701 17.0703C12.2446 17.0323 11.8805 16.8232 11.4589 16.6078C11.0374 16.3923 10.4178 16.0248 10.0857 15.7904C9.30005 15.2455 7.88209 13.8388 7.32002 13.0531C6.56633 11.9886 5.85096 10.4425 5.52521 9.15619C5.2314 8.00931 5.21224 7.7305 5.17391 4.65736L5.13559 1.67926L4.8801 1.59688C3.89008 1.26106 1.84617 1.09631 1.29049 1.30541Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_121_3668">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Database</h3>
                            <p className="text-sm text-muted-foreground">
                                ORM Prisma and Postgresql
                            </p>
                        </div>
                    </div>
                </div>
                <div className="z-20overflow-hidden  relative z-20 rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Components</h3>
                            <p className="text-sm text-muted-foreground">
                                UI components built using Radix UI and styled with Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative z-20  overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="h-12 w-12 fill-current"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Authentication</h3>
                            <p className="text-sm text-muted-foreground">
                                Authentication using NextAuth.js and middlewares.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative z-20  overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Subscriptions</h3>
                            <p className="text-sm text-muted-foreground">
                                Free and paid subscriptions using Stripe.
                            </p>
                        </div>
                    </div>
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