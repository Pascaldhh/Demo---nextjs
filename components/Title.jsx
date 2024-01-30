"use client";

import { TitleType } from '@components/Types'
import { useLayoutEffect, useRef } from 'react';

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Title({ title, type, className }) {
  const wrapRef = useRef();

  let titleType = type ?? TitleType.Default;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      const lines = gsap.utils.toArray("#line");
      lines.forEach(line => gsap.set(line, { width: 0 }))

      const linesBig = gsap.utils.toArray(".line-big");
      const linesSmall = gsap.utils.toArray(".line-small");

      linesSmall.forEach(line => gsap.to(line, { scrollTrigger: { trigger: line, start: "top bottom", end:"bottom top", scrub: true }, width: "50%" }));
      linesBig.forEach(line => gsap.to(line, { scrollTrigger: { trigger: line, start: "top bottom", end:"bottom top", scrub: true}, width: "100%" }));
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={"flex items-center gap-4 " + ((titleType === TitleType.Big || titleType === TitleType.Default) ? "justify-center " : "") + (className ?? "")}>
    {
      (titleType === TitleType.Big || titleType === TitleType.Default) && 
      <>
        <div id='line' className="line-small h-1 w-6/12 bg-enveus-primary"></div>
        <h2 className="uppercase font-bold text-3xl whitespace-nowrap">{title}</h2>
        <div id='line' className="line-small h-1 w-6/12 bg-enveus-primary"></div>
      </>
    }

    {
      (titleType === TitleType.BigRight) && 
      <>
        <h2 className="uppercase font-bold text-3xl whitespace-nowrap">{title}</h2>
        <div id='line' className="line-big h-1 w-full bg-enveus-primary"></div>
      </>
    }

    {
      titleType === TitleType.Medium && 
      <>
        <h3 className='uppercase font-bold text-base text-white text-opacity-50 whitespace-nowrap'>{title}</h3>
        <div id='line' className="line-big h-1 w-full bg-white opacity-50"></div>
      </>
    }
  </div>
  )
}
