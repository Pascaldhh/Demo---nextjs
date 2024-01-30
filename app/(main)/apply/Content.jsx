"use client";

import Input from "@components/Input";
import { ThemeContext } from "@components/ProviderWrapper";
import { gsap } from "gsap";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";

export default function Content() {
  const wrapRef = useRef();
  const subtitleRef = useRef();

  const { getImages, loading } = useContext(ThemeContext);
  useEffect(() => getImages(), []);

  useLayoutEffect(() => {
    if(loading) return;

    const wrap = wrapRef.current;
    const subtitle = subtitleRef.current;

    const ctx = gsap.context(() => {
      gsap.set(wrap, {y: -50, autoAlpha: 0, force3D: true, rotation: 0.01 });
      gsap.to(wrap, {y: 0, duration: 1.5, delay:.5, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(subtitle, {y: -50, scale:1.5, autoAlpha: 0, force3D: true, rotation: 0.01 });
      gsap.to(subtitle, {y: 0, duration: 1.5, scale: 1, delay:1.5, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

    }, wrapRef);

    return () => ctx.revert();
  }, [loading])

  return (
    <div className="container">
      <div ref={wrapRef} className="bg-enveus-black px-12 py-12 sm:px-24">
        <h3 ref={subtitleRef} className='text-enveus-primary uppercase italic font-bold text-xl text-center'>Ready to join us?</h3>
        <h1 className='text-4xl uppercase font-bold text-center mb-12'>Apply now</h1>
        <div className="flex flex-col gap-12">
          <Input className="flex flex-col gap-2" type="text" text="Full name" />
          <Input className="flex flex-col gap-2" type="email" text="Email"/>
          <Input className="flex flex-col gap-2" type="text" text="Username" />
          <Input className="flex flex-col gap-2" type="text" text="Country" />
          <Input className="flex flex-col gap-2" type="text" text="What game are you applying for?" />
          <Input className="flex flex-col gap-2" type="textarea" text="What makes you stand out over other applicants?" />
          <Input className="flex flex-col gap-2" type="textarea" text="What makes you a good fit for the enveus guild?" />
          <Input className="flex flex-col gap-2" type="textarea" text="What makes you a good fit for the enveus guild?" />
          <Input className="flex flex-col gap-2" type="textarea" text="What makes you a good fit for the enveus guild?" />
          <Input className="flex flex-col gap-2" type="textarea" text="What makes you a good fit for the enveus guild?" />
          <Input className="flex flex-col gap-2" type="textarea" text="What makes you a good fit for the enveus guild?" />
          <Input className="flex flex-col gap-2" type="textarea" text="What makes you a good fit for the enveus guild?" />
          <button className="btn btn-outline-primary uppercase self-center">Submit</button>
        </div>
      </div>
    </div>
  )
}
