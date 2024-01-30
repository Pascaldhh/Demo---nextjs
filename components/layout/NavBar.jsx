"use client";
import MainMenu from "@components/layout/MainMenu"

import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from 'next/link'

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { usePathname } from "next/navigation";
import AccountDashboard from "@components/AccountDashboard";
import LoadingLink from "@components/LoadingLink";
import { ThemeContext } from "@components/ProviderWrapper";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const {heroHeight} = useContext(ThemeContext);
  const navRef = useRef();
  const pathname = usePathname();
  const accDashRef = useRef();

  useLayoutEffect(() => {
    const nav = navRef.current;

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(nav, { y: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(nav, { y: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.to(nav, { scrollTrigger: { trigger: document.body, start: pathname === "/" ? `${heroHeight}px top` : "20px top", end:"20px top", onEnter:() => navRef.current.classList.remove("top"), onLeaveBack:() => navRef.current.classList.add("top") } });
    }, navRef);

    return () => ctx.revert();
  }, [pathname]);


  useEffect(() => {
    if(pathname === "/loggedIn/") setLoggedIn(true);
    else setLoggedIn(false);
  }, [pathname]);


  const [activePage, setActivePage] = useState("");
  const changePage = () => setActivePage(location.hash);
  useEffect(() => {
    changePage();
    addEventListener("hashchange", changePage);    
    return () => removeEventListener("hashchange", changePage);
  }, []);

  useEffect(() => {
    if(activePage === "#dashboard" || activePage.startsWith("#db")) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    
  }, [activePage]);

  return (
    <nav ref={navRef} className="opacity-0 relative top bg-enveus-black [&.active]:!bg-enveus-black [&.active]:transition-none [&.top]:bg-transparent lg:[&.active]:bg-transparent py-2 border-gray-200 transition-colors group">
      <div className="container flex flex-wrap items-center justify-between">
        <LoadingLink href="/" className="flex items-center">
          <img src="/assets/img/website-logo.svg" className="lg:group-[&.top]:h-32 h-24 mr-3 transition-all" alt="Enveus logo" />
        </LoadingLink>
        <button onClick={() => navRef.current.classList.toggle("active")} type="button" className="inline-flex items-center p-2 w-11 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <div className="w-full flex flex-col gap-1.5 group-[.active]:rotate-180 transition-all">
              <div className="w-full h-1 bg-enveus-primary"></div>
              <div className="w-9/12 h-1 bg-enveus-primary"></div>
            </div>
        </button>
        <div className="hidden w-full lg:block lg:w-auto group-[.active]:block">
          <MainMenu 
            routes={loggedIn ? {
              "/": { name: "Home" },
              "/roster": { name: "Roster" },
              "/about-us": { name: "About us" },
              "/apply": { name: "Apply" },
              "/videos": { name: "Videos" },
              "{{login}}": { name: "username", picture: "/assets/img/card-samurai.png", id: "#dashboard" }
            } : {
              "/": { name: "Home" },
              "/roster": { name: "Roster" },
              "/about-us": { name: "About us" },
              "/apply": { name: "Apply" },
              "/videos": { name: "Videos" },
              "/auth/login": { name: "Login", isBtn: true }
            }}
            classNameLoggedIn="uppercase font-semibold border border-solid border-enveus-primary py-2 pl-12 pr-16 rounded-full"
            className="flex py-2 gap-12 items-center lg:group-[.active]:flex-row group-[.active]:flex-col lg:group-[.active]:bg-transparent group-[.active]:bg-enveus-black group-[.active]:absolute group-[.active]:z-10 lg:group-[.active]:static group-[.active]:left-0 group-[.active]:top-full group-[.active]:w-full" 
            classNamesLink="relative uppercase"
            classNamesNormal="font-semibold before:transition-[width] before:ease-out hover:before:w-full before:w-0 [&.active]:before:w-full [&.active]:before:inline before:absolute before:left-0 before:bottom-0 before:bg-enveus-primary before:h-1 p-1"
            classNamesBtn="btn rounded-btn-outline-white"
            navRef={navRef}
          />
        </div>
      </div>
      {(activePage === "#dashboard" || activePage.startsWith("#db")) && 
        <AccountDashboard 
          ref={accDashRef}
          name="Username"
          profileImg="/assets/img/card-samurai.png" 
          activePage={activePage}
          classNameDashboard="translate-x-full [&.open]:translate-x-0 transition-transform"
        />
      }
    </nav>
  )
}
