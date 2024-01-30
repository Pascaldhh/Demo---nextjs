"use client";

import Faq from '@components/Faq';
import { ThemeContext } from '@components/ProviderWrapper';
import RecordText from '@components/RecordText';
import TextBox from '@components/TextBox';
import Video from '@components/Video';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react'

export default function Content() {
  const firstSectionRef = useRef();
  const subtitleRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const secondSectionRef = useRef();
  const faqTitleRef = useRef();

  const { getImages, loading } = useContext(ThemeContext);
  useEffect(() => getImages(), []);

  useLayoutEffect(() => {
    if(loading) return;

    const subtitle = subtitleRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;

    const ctxOne = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.set(subtitle, {y: -50, scale: 2, transformOrigin:"center", autoAlpha: 0, force3D: true, rotation: 0.01 });
      gsap.to(subtitle, {y: 0, scale: 1, duration: 1.5, delay:2, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(title, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(title, {x: 0, duration: 3, delay: 1, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(description, {x: 50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(description, {x: 0, duration: 2, delay: 3, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

    }, firstSectionRef);

    const faqTitle = faqTitleRef.current;
    const ctxTwo = gsap.context(() => {
      gsap.set(faqTitle, {y: -50, scale: 2, transformOrigin:"center", autoAlpha: 0, force3D: true, rotation: 0.01 });
      gsap.to(faqTitle, {scrollTrigger: { trigger: faqTitle, start: "top bottom-=50", toggleActions: "play none none reverse" }, y: 0, scale: 1, duration: 1.5, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

    }, secondSectionRef)

    return () => {
      ctxOne.revert();
      ctxTwo.revert();
    }
  }, [loading]);

  return (
    <>
      <section ref={firstSectionRef}>
        <div className="container">
          <Video className="max-w-3xl mx-auto" imgSrc="/assets/img/video-about-us.png"/>
          <div className='mt-20'>
            <h3 ref={subtitleRef} className='opacity-0 text-enveus-primary uppercase italic font-bold text-xl'>We are enveus</h3>
            <h1 ref={titleRef} className='opacity-0 text-4xl uppercase font-bold'>Who is enveus?</h1>
            <TextBox ref={descriptionRef} className="opacity-0 mt-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt <br /><br/>augue interdum velit euismod in pellentesque massa placerat. Sit amet nulla facilisi morbi tempus iaculis urna id. Euismod elementum nisi quise leifend quam. Aliquam sem fringilla ut morbi tincidunt augue interdum. <br/><br/>Eget dolor morbi non arcu risus quis varius. Sagittis id consectetur purus ut faucibus pulvinar elementum. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Pretium aenean pharetramagna ac placerat vestibulum lectus mauris ultrices. <br/><br/>Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Dis parturient montes nascetur ridiculus. Ligula ullamcorper malesuada proin libero nunc consequat.</p>
            </TextBox>
          </div>
        </div>
        <div className="bg-enveus-black border-t border-b border-enveus-primary flex flex-col lg:flex-row justify-center gap-16 my-28 py-24">
          <RecordText record="732" text="Battles won" className="text-center flex flex-col gap-20"
            textClassName="text-enveus-primary font-bold uppercase text-2xl"
            recordClassName="text-8xl font-extrabold text-black [text-shadow:_-2px_-2px_0_#fff,_2px_-2px_0_#fff,_-2px_2px_0_#fff,_2px_2px_0_#fff]"
          />
          <RecordText record="462" text="Total members" className="text-center flex flex-col gap-20"
            textClassName="text-enveus-primary font-bold uppercase text-2xl"
            recordClassName="text-8xl font-extrabold text-black [text-shadow:_-2px_-2px_0_#fff,_2px_-2px_0_#fff,_-2px_2px_0_#fff,_2px_2px_0_#fff]"
          />
          <RecordText record="12" text="Live streamers" className="text-center flex flex-col gap-20"
            textClassName="text-enveus-primary font-bold uppercase text-2xl"
            recordClassName="text-8xl font-extrabold text-black [text-shadow:_-2px_-2px_0_#fff,_2px_-2px_0_#fff,_-2px_2px_0_#fff,_2px_2px_0_#fff]"
          />
        </div>
      </section>
      <section ref={secondSectionRef}>
        <div className="container">
          <h2 ref={faqTitleRef} className='uppercase font-bold text-enveus-primary text-4xl'>Faq</h2>
          <div className="flex flex-col gap-12 mt-8">
            <Faq 
              title="Will I get x when joining the guild?" 
              description="magna ac placerat vestibulum lectus mauris ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Dis parturient montes nascetur ridiculus. Ligula ullamcorper malesuada proin libero nunc consequat." 
            />
            <Faq 
              title="HOW LONG DOES IT TAKE TO APPLY?" 
              description="magna ac placerat vestibulum lectus mauris ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Dis parturient montes nascetur ridiculus. Ligula ullamcorper malesuada proin libero nunc consequat." 
            />
            <Faq 
              title="HOW ACTIVE IS THE GUILD?" 
              description="magna ac placerat vestibulum lectus mauris ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Dis parturient montes nascetur ridiculus. Ligula ullamcorper malesuada proin libero nunc consequat." 
            />
            <Faq 
              title="CAN I JOIN BELOW THE REQUIREMENTS?" 
              description="magna ac placerat vestibulum lectus mauris ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Dis parturient montes nascetur ridiculus. Ligula ullamcorper malesuada proin libero nunc consequat." 
            />
            <Faq 
              title="HOW ACTIVE DO I HAVE TO BE?" 
              description="magna ac placerat vestibulum lectus mauris ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Dis parturient montes nascetur ridiculus. Ligula ullamcorper malesuada proin libero nunc consequat." 
            />
          </div>
        </div>
      </section>
    </>
  )
}
