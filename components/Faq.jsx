"use client";
import React, { useLayoutEffect, useRef } from 'react'
import TextBox from '@components/TextBox'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Faq({ title, description }) {
  const wrapRef = useRef();
  const titleRef = useRef();
  const boxRef = useRef();

  useLayoutEffect(() => {
    const title = titleRef.current;
    const box = boxRef.current;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(title, {x: -150, autoAlpha: 0, force3D: true, rotation: 0.01 });
      gsap.to(title, {scrollTrigger: { trigger: title, start: "top bottom-=150", toggleActions: "play none none reverse" }, x: 0, duration: 1.5, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(box, {x: 150, autoAlpha: 0, force3D: true, rotation: 0.01 });
      gsap.to(box, {scrollTrigger: { trigger: title, start: "top bottom-=150", toggleActions: "play none none reverse" }, x: 0, duration: 1.5, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>
      <h4 ref={titleRef} className='uppercase font-bold italic text-2xl'>{title}</h4>
      <TextBox ref={boxRef} className="mt-4"><p>{description}</p></TextBox>
    </div>
  )
}
