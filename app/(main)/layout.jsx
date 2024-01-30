"use client";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { useContext } from "react";
import { ThemeContext } from "@components/ProviderWrapper";

export default function layout({ children }) {
  const { bgHeroPinRef, heroHeight, bgHeroImgRef } = useContext(ThemeContext);
  return (
    <div>
      <Header className="fixed top-0 z-50 w-full [padding:_0.1px]"/>
      <div ref={bgHeroPinRef} className="absolute h-[950px] inset-0 -z-10 w-full after:absolute after:h-32 after:w-full after:-bottom-0 after:left-0 after:bg-[linear-gradient(to_bottom,_rgb(0,_0,_0,_0)_0%,_rgb(10,_10,_10,_1)_100%)] before:absolute before:h-[20rem] before:w-full before:-bottom-[20rem] before:left-0 before:bg-[linear-gradient(to_top,_rgb(0,_0,_0,_0)_0%,_rgb(10,_10,_10,_1)_100%)]">
        <div className={`overflow-hidden h-full`}>
          <div ref={bgHeroImgRef} className={`bg-hero bg-cover bg-no-repeat h-full before:absolute before:inset-0 before:bg-[linear-gradient(180.09deg,_rgba(18,_18,_18,_0)_44.9%,_#121212_99.93%),_radial-gradient(43.93%_43.94%_at_41.07%_56.06%,_rgba(27,_27,_27,_0.124)_20.31%,_rgba(37,_37,_37,_0.4)_100%)]`}></div>
        </div>
      </div>
      <main className="relative overflow-hidden mt-[112px] py-20">
        <div className="bg-main bg-contain blur-lg inset-0 w-full h-full -z-20 absolute"></div>
        {children}
      </main>
      <Footer className="text-white text-opacity-50 font-medium bg-enveus-black pt-4 pb-8"/>
    </div>
  )
}
