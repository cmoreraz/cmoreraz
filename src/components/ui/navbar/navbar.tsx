export const NavBar = () => {
    return (
        <>
            <nav className="flex items-center bg-gray-800 p-2 flex-wrap">

                <div id="navigation"
                    className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">

                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">

                        <a href="/cmoreraz/"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>About</span>
                        </a>
                        <a href="#"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>Work</span>
                        </a>

                        <a href="/cmoreraz/contact"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>Contact</span>
                        </a>

                        <a href="/cmoreraz/stack"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>Tools</span>
                        </a>

                        <a href="#"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>More</span>
                        </a>

                        <a
                            className="rounded-lg p-2 hover:bg-white/25"
                            href={'https://www.linkedin.com/in/cmoreraz'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                width="24px"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <title>Linkedin</title>
                                <g>
                                    <path
                                        d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                                    />
                                </g>
                            </svg>
                        </a>


                        <a className="rounded-lg p-2 hover:bg-white/25"
                            href={'https://github.com/cmoreraz'}
                            target="_blank"
                            rel="noreferrer" >
                            <svg height="24px"
                                width="24px"
                                version="1.1"
                                viewBox="0 0 512 512"
                                fill="currentColor"                             >
                                <title>Github</title>
                                <g>
                                    <path
                                        clipRule="evenodd"
                                        d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
                                        fillRule="evenodd"
                                    />
                                </g>
                            </svg>
                        </a>

                        <a className="rounded-lg p-2 hover:bg-white/25"
                            href={'https://twitter.com/morerazubieta'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                width="24px"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <title>X</title>
                                <g>
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                                </g>
                            </svg>
                        </a>

                    </div>
                </div>
            </nav>
        </>
    );
}