"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const menu = [
  {
    name: 'About',
    link: '/cmoreraz/'
  },
  {
    name: 'Work experience',
    link: '/cmoreraz/experience'
  },
  {
    name: 'Tech Stack',
    link: '/cmoreraz/stack'
  },
  {
    name: 'Contact',
    link: '/cmoreraz/contact'
  },
  {
    name: 'More',
    link: '#'
  }
]


export const NavBarMobile = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden fixed border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">

          <div className="mobile-menu block">
            {
              !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )
            }
          </div>
          
        </div>
        {
          navbarOpen ? <ul className="flex flex-col py-4 items-center">
            {
              menu.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul> : null
        }
      </nav>

    </>
  );
}