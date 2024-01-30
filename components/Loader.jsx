"use client";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./ProviderWrapper";

export default function Loader() {
  const {revealTime, minimumLoading} = useContext(ThemeContext);
  
  
  return (
    <div className={`[animation:_bounce_1s_cubic-bezier(0.4,_0,_0.2,_1)_infinite_alternate_forwards] group-[.openLoader]:opacity-0 group-[.z-index]:-z-50 delay-200 opacity-100 duration-[${revealTime + 200}] transition-opacity h-[100vh] grid place-items-center fixed inset-0 z-[100]`}>
      <svg className="group-[.openLoader]:scale-125 scale-100 transition-transform" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="95" height="102" viewBox="0 0 95 102" fill="none">
        <rect width="93" height="99.4783" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_44_13" transform="scale(0.000515996 0.000482393)"/>
          </pattern>
          <image id="image0_44_13" width="1938" height="2073" xlinkHref="/assets/img/website-logo.png"/>
        </defs>
        <path className={`[stroke-dasharray:1000] [stroke-dashoffset:1000] group-[.openReveal]:animate-none group-[.firstLoad]:[animation-delay:_1s] [animation:dash_1s_cubic-bezier(0.4,_0,_0.2,_1)_forwards]`} d="M46.5 0 q10 30 17.5 20 q4 -20 10 20 q0 2 12 5 q4 2 7 20 q0 22 -24 14 q-6 -2 -9 6 Q50 99 48 99 q-3 4.5 -17 -18 q0 -2 -8 -1 q-42 -8 -2 -44 q-1 -30 8 -8 Q40 30 46.5 0" stroke="rgb(148, 13, 254)" strokeWidth="4" />
      </svg>
    </div>
  )
}
