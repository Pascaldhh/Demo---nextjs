"use client";

import PlayerCard from '@components/PlayerCard'
import { ThemeContext } from '@components/ProviderWrapper';
import RecordText from '@components/RecordText'
import TextBox from '@components/TextBox'
import Title from '@components/Title'
import { TitleType } from '@components/Types'
import Video from '@components/Video'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link'
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react'

export default function Content() {
  const { getImages, bgHeroPinRef, bgHeroImgRef, providerRef, loading } = useContext(ThemeContext);
  useEffect(() => getImages(), []);

  const heroRef = useRef();
  const gamesCloudLeftRef = useRef();
  const gamesCloudRightRef = useRef();

  const firstSectionRef = useRef();
  const mainTitleRef = useRef();
  const mainTitleWrapRef = useRef();
  const descriptionRef = useRef();
  const descriptionWrapRef = useRef();

  const secondSectionRef = useRef();
  const titleGamesRef = useRef();
  const gamesImgOneRef = useRef();
  const gamesImgTwoRef = useRef();
  const gamesImgThreeRef = useRef();

  const aboutUsRef = useRef();

  const discordSectionRef = useRef();
  const discordTitleRef = useRef();
  const discordDescRef = useRef();
  const discordImgRef = useRef();

  useLayoutEffect(() => {
    if(loading) return;

    const mainTitle = mainTitleRef.current;
    const mainTitleWrap = mainTitleWrapRef.current;
    const description = descriptionRef.current;
    const descriptionWrap = descriptionWrapRef.current;
  
    const ctxOne = gsap.context(() => {
      gsap.set(mainTitleWrap, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(mainTitleWrap, { x: 0, duration: 1.5, delay: .25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(descriptionWrap, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(descriptionWrap, { x: 0, duration: 1.5, delay: .75, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
    }, firstSectionRef);

    const mmHero = gsap.matchMedia();
    const hero = heroRef.current;
    mmHero.add("(min-width: 1024px)", () => {
      gsap.registerPlugin(ScrollTrigger);
      
      const bgHeroPin = bgHeroPinRef.current;
      const bgHeroImg = bgHeroImgRef.current;
      const pinTrigger = (pin, attr) => { return { 
        trigger: document.body, 
        pin: pin, 
        start: "top top",
        end: "+=1000",
        ...attr
      }};
      ScrollTrigger.create(pinTrigger(hero, { refreshPriority: 1 }));
      ScrollTrigger.create(pinTrigger(bgHeroPin, { pinSpacing: false }));
      
      gsap.to(mainTitle, { scrollTrigger: { trigger: mainTitle, refreshPriority: 2, start: "top+=200 center", end: "bottom+=200 top", scrub: 1 }, x: -50, autoAlpha: 0, ease: 'expo', overwrite: true, immediateRender: false });
      gsap.to(description, { scrollTrigger: { trigger: description, refreshPriority: 2, start: "top+=200 center", end: "bottom+=200 top",  scrub: 1 }, x: -50, autoAlpha: 0, ease: 'expo', overwrite: true, immediateRender: false });
      gsap.to(bgHeroImg, { scrollTrigger: { trigger: bgHeroPin, refreshPriority: 3, start: "center center", end: "bottom+=200 top",  scrub: 1 }, ease: 'expo', overwrite: "auto", scale: 1.25 });
    }, providerRef);

    const titleGames = titleGamesRef.current;
    const gamesImgOne = gamesImgOneRef.current;
    const gamesImgTwo = gamesImgTwoRef.current;
    const gamesImgThree = gamesImgThreeRef.current;
    const gamesCloudLeft = gamesCloudLeftRef.current;
    const gamesCloudRight = gamesCloudRightRef.current;
    const mmGames = gsap.matchMedia();
    mmGames.add("(max-width: 1023px)", () => {

      gsap.registerPlugin(ScrollTrigger);

      gsap.set(titleGames, {y: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(titleGames, {scrollTrigger: { trigger: titleGames, start: "top bottom-=250", toggleActions: "play none none reverse" }, y: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(gamesImgOne, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(gamesImgOne, {scrollTrigger: { trigger: gamesImgOne, start: "top bottom-=250", toggleActions: "play none none reverse" }, x: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
      
      gsap.set(gamesImgTwo, {y: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(gamesImgTwo, {scrollTrigger: { trigger: gamesImgTwo, start: "top bottom-=250", toggleActions: "play none none reverse" }, y: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
      
      gsap.set(gamesImgThree, {x: 50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(gamesImgThree, {scrollTrigger: { trigger: gamesImgThree, start: "top bottom-=250", toggleActions: "play none none reverse" }, x: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

    }, providerRef);

    mmGames.add("(min-width: 1024px)", () => {
      gsap.set(titleGames, {y: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(titleGames, { scrollTrigger: { trigger: titleGames, refreshPriority: 3, start: "top+=500 center", end: "bottom+=500 top",  scrub: 1 }, y: 0, autoAlpha: 1, ease: 'expo', overwrite: true, immediateRender: false });
      
      gsap.set(gamesImgOne, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(gamesImgOne, { scrollTrigger: { trigger: gamesImgOne, refreshPriority: 3, start: "top+=500 center", end: "bottom+=500 top",  scrub: 1 }, x: 0, autoAlpha: 1, ease: 'expo', overwrite: true, immediateRender: false });

      gsap.set(gamesImgTwo, {y: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(gamesImgTwo, { scrollTrigger: { trigger: gamesImgTwo, refreshPriority: 3, start: "top+=500 center", end: "bottom+=500 top",  scrub: 1 }, y: 0, autoAlpha: 1, ease: 'expo', overwrite: true, immediateRender: false });

      gsap.set(gamesImgThree, {x: 50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(gamesImgThree, { scrollTrigger: { trigger: gamesImgThree, refreshPriority: 3, start: "top+=500 center", end: "bottom+=500 top",  scrub: 1 }, x: 0, autoAlpha: 1, ease: 'expo', overwrite: true, immediateRender: false });
      
      gsap.set(gamesCloudLeft, {xPercent: -100, autoAlpha:0, force3D: true, rotation:0.01 });
      gsap.to(gamesCloudLeft, { scrollTrigger: { trigger: gamesCloudLeft, refreshPriority: 3, start: "top+=200 center", end: "bottom+=700 top",  scrub: 1 },  autoAlpha:.8, xPercent: 0, ease: 'expo', overwrite: true, immediateRender: false });
    
      gsap.set(gamesCloudRight, {xPercent: 100, autoAlpha:0,  force3D: true, rotation:0.01 });
      gsap.to(gamesCloudRight, { scrollTrigger: { trigger: gamesCloudRight, refreshPriority: 3, start: "top+=200 center", end: "bottom+=700 top",  scrub: 1 }, autoAlpha:.8, xPercent: 0, ease: 'expo', overwrite: true, immediateRender: false });

    }, secondSectionRef);

    const discordTitle = discordTitleRef.current;
    const discordDesc = discordDescRef.current;
    const discordImg = discordImgRef.current;
    const ctxThree = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(discordTitle, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(discordTitle, {scrollTrigger: { trigger: discordTitle, start: "top bottom-=250", toggleActions: "play none none reverse" }, x: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(discordDesc, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(discordDesc, {scrollTrigger: { trigger: discordDesc, start: "top bottom-=250", toggleActions: "play none none reverse" }, x: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
      
      gsap.set(discordImg, {x: 50, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(discordImg, {scrollTrigger: { trigger: discordImg, start: "top bottom-=250", toggleActions: "play none none reverse" }, x: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
    }, discordSectionRef);


    const aboutUs = aboutUsRef.current;
    const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

    const mmAboutUs = gsap.matchMedia();
    mmAboutUs.add("(min-width: 1024px)", () => {
      gsap.set(aboutUs, {backgroundPosition: () => `50% ${-window.innerHeight * getRatio(aboutUs)}px`});
      gsap.to(aboutUs, {backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(aboutUs))}px`, ease: "none", scrollTrigger: { trigger: aboutUs, start: "top bottom", end: "bottom top", scrub: true }});
    }, aboutUsRef);

    return () => {
      mmHero.revert();
      ctxOne.revert();
      mmGames.revert();
      ctxThree.revert();
      mmAboutUs.revert();
    }
  }, [loading]);

  return (
    <>
      <div ref={heroRef} className='lg:relative'>
        <section ref={firstSectionRef}>
          <div className="container flex flex-col gap-4 pt-20">
            <div ref={mainTitleWrapRef} className='opacity-0'>
              <h1 ref={mainTitleRef} className='font-enveus uppercase text-8xl'>Enveus</h1>
            </div>
            <div ref={descriptionWrapRef} className='opacity-0'>
              <p ref={descriptionRef} className='text-xl max-w-xl'>Enveus guild is one of the largest oce guilds playing a large variety of games with focus on MMorpg, arpg and survival genres</p>
            </div>
          </div>
        </section>
        <section ref={secondSectionRef} className='lg:absolute lg:top-0 lg:w-full'>
          <div className="lg:relative container mt-96 pt-60 lg:pt-0 lg:mt-32">
            <h2 ref={titleGamesRef} className='font-bold text-3xl uppercase text-center'>Games we play</h2>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-20 mt-16">
              <img ref={gamesImgOneRef} className='h-32 w-[309px] grayscale hover:grayscale-0 transition-[filter]' src="/assets/img/game-wow.png" alt="World of Warcraft img" />
              <img ref={gamesImgTwoRef} className='h-40 w-[153px] grayscale hover:grayscale-0 transition-[filter]' src="/assets/img/game-aoc.png" alt="Aoc img" />
              <img ref={gamesImgThreeRef} className='h-36 w-[276px] grayscale hover:grayscale-0 transition-[filter]' src="/assets/img/game-diablo.webp" alt="Diablo img" />
            </div>
            <div ref={gamesCloudLeftRef} className="lg:absolute -z-10 lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:bg-enveus-black lg:w-1/2 lg:h-[150%] lg:opacity-80 lg:blur-3xl"></div>
            <div ref={gamesCloudRightRef} className="lg:absolute -z-10 lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:bg-enveus-black lg:w-1/2 lg:h-[150%] lg:opacity-80 lg:blur-3xl"></div>
          </div>
        </section>
      </div>
      <section>
        <div className="container mt-24 lg:mt-96 lg:pt-44">
          <Title title="Roster"/>
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-16 mt-20">
            <PlayerCard className="max-w-[250px]" title="Kain" subtitle="Founder" src="/assets/img/card-kain.png" />
            <PlayerCard className="max-w-[250px]" title="Kain" subtitle="Founder" src="/assets/img/card-kain.png" />
            <PlayerCard className="max-w-[250px]" title="Kain" subtitle="Founder" src="/assets/img/card-kain.png" />
          </div>
          <div className="text-center mt-20">
            <Link href="/roster" className='btn btn-primary inline-block'>View roster</Link>
          </div>
        </div>
      </section>
      <section ref={aboutUsRef} className="relative bg-aboutUs bg-cover -scale-x-100 before:absolute before:inset-0 before:bg-black before:bg-opacity-60">
        <div className="container pt-14 pb-40 mt-24 -scale-x-100">
          <div className="max-w-3xl">
            <Title type={TitleType.BigRight} title="About us"/>
            <TextBox className="mt-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt <br/><br/>augue interdum velit euismod in pellentesque massa placerat. Sit amet nulla facilisi morbi tempus iaculis urna id. Euismod elementum nisi quiseleifend <br/><br/>quam. Aliquam sem fringilla ut morbi tincidunt augue interdum. Eget dolor morbi non arcu risus quis varius. Sagittis id consectetur purus ut faucibus pulvinar elementum. Diam maecenas ultricies mi eget mauris pharetra <br/><br/>et ultrices. Pretium aenean pharetramagna ac placerat vestibulum lectus mauris ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Dis parturient montes nascetur ridiculus. Ligula ullamcorper malesuada proin libero nunc consequat.</p>
            </TextBox>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Video title="Enveus vs Titan" subtitle="30 June: AOC Finals" imgSrc="/assets/img/bg-video-1.png" videoSrc="/assets/videos/sample-1.mp4" />
              <Video title="Guild Gathering Event" subtitle="Enveus Guild Meeting - 6PM EST" imgSrc="/assets/img/bg-video-2.png" videoSrc="/assets/videos/sample-1.mp4" />
              <Video title="Apocalypse Attack" subtitle="Open Beta Recap" imgSrc="/assets/img/bg-video-3.png" videoSrc="/assets/videos/sample-1.mp4" />
              <Video title="Guild Raid" subtitle="October 12: Guild Raid Highlights" imgSrc="/assets/img/bg-video-4.png" videoSrc="/assets/videos/sample-1.mp4" />
            </div>
            <div className="text-center mt-20">
              <Link href="/videos" className='btn btn-primary inline-block'>View videos</Link>
            </div>
          </div>
        </div>
      </section>
      <section ref={discordSectionRef} className='relative after:absolute before:absolute before:bg-discord after:bg-black after:bg-opacity-80 after:inset-0 before:inset-0 before:bg-cover after:-z-10 before:-z-20 before:grayscale'>
        <div className="container mt-24 py-44">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-between">
              <div className="text-center lg:text-left">
                <h2 ref={discordTitleRef} className='uppercase font-bold text-5xl text-enveus-discord'>Join our discord</h2>
                <p ref={discordDescRef} className='font-bold lg:max-w-md mt-6'>Enveus invite you to our active community of committed players and game lovers to discuss, hangout and have fun together!</p>
              </div>
          
              <div className="mt-12 lg:mt-0 flex flex-col gap-10 md:gap-0 items-center md:items-start md:flex-row md:justify-between">
                <RecordText 
                  className="flex flex-col items-center"
                  record="92" recordClassName="text-7xl font-bold text-enveus-discord"
                  text="Recruits" textClassName="font-bold uppercase text-xl"
                />
                <RecordText 
                  className="flex flex-col items-center"
                  record="12" recordClassName="text-7xl font-bold text-enveus-discord"
                  text="Elders" textClassName="font-bold uppercase text-xl"
                />
                <RecordText 
                  className="flex flex-col items-center"
                  record="1552" recordClassName="text-7xl font-bold text-enveus-discord"
                  text="Members" textClassName="font-bold uppercase text-xl"
                />
              </div>
            </div>
            <div ref={discordImgRef} className="mt-20 lg:mt-0 flex justify-center">
            <iframe src="https://discord.com/widget?id=1143262861699858443&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
