"use client";

import { useContext } from "react";
import Loader from "./Loader";
import { ThemeContext } from "./ProviderWrapper";

export default function Reveal() {
  const { revealRef, revealTime } = useContext(ThemeContext);
  return (
    <div ref={revealRef} className="group openLoader firstLoad">
      <Loader/>
      <div className="fixed inset-0 z-[90] group-[.z-index]:-z-50">
        <div className={`group-[.openReveal]:-translate-y-full h-1/2 bg-enveus-black transition-transform duration-[${revealTime}]`}></div>
        <div className={`group-[.openReveal]:translate-y-full h-1/2 bg-enveus-black transition-transform duration-[${revealTime}]`}></div>
      </div>
    </div>
  )
}
