"use client";

import LeftBarOption from "@components/LeftBarOption";
import { ThemeContext } from "@components/ProviderWrapper";
import SearchBar from "@components/SearchBar";
import Title from "@components/Title";
import { TitleType } from "@components/Types";
import Video from "@components/Video";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";

export default function Content() {
  const { getImages, loading } = useContext(ThemeContext);
  const wrapRef = useRef();
  const searchbarRef = useRef();
  const categoryRefs = useRef([]);
  const titleRef = useRef();
  const guildMeetingTitleRef = useRef();

  useEffect(() => getImages(), []);

  useLayoutEffect(() => {
    if(loading) return;

    const searchbar = searchbarRef.current;
    const categories = categoryRefs.current;
    const title = titleRef.current;
    const guildMeetingTitle = guildMeetingTitleRef.current;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      const tl = gsap.timeline();
      gsap.set(searchbar, {y: -50, scale:1.5, autoAlpha: 0, force3D: true, rotation: 0.01 });
      tl.to(searchbar, {y: 0, duration: 1, scale: 1, autoAlpha: 1, delay: 1, ease: 'expo', overwrite: 'auto' });

      gsap.set(title, {y: -50, scale:1.5, autoAlpha: 0, force3D: true, rotation: 0.01 });
      tl.to(title, {y: 0, duration: 1, scale: 1, autoAlpha: 1, ease: 'expo', overwrite: 'auto' }, "-=.5");

      categories.forEach((item, i) => {
        gsap.set(item, {y: -50, scale:1.5, autoAlpha: 0, force3D: true, rotation: 0.01 });
        tl.to(item, {y: 0, duration: 1, scale: 1, autoAlpha: 1, ease: 'expo', overwrite: 'auto' }, i !== 0 ? "-=.75" : "-=.4");
      });
      
      gsap.set(guildMeetingTitle, {y: -50, scale:1.5, autoAlpha: 0, force3D: true, rotation: 0.01 });
      tl.to(guildMeetingTitle, {y: 0, duration: 1, scale: 1, autoAlpha: 1, ease: 'expo', overwrite: 'auto' }, "-=.5");

    }, wrapRef);

    return () => ctx.revert();
  }, [loading]);

  return (
    <div ref={wrapRef}>
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-20">
          <div className="xl:max-w-4xl">
            <Video isFeatured={true} title="Guild Raid" titleSize="text-2xl md:text-4xl" subtitle="OCTOBER 12: GUILD RAID HIGHLIGHTS" subtitleSize="text-base md:text-xl" textPadding={"px-4 py-2 lg:px-12 md:py-6"} imgSrc="/assets/img/img-videos-featured.jpg"/>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <SearchBar ref={searchbarRef}/>
            <div ref={titleRef} className="opacity-0 flex items-center gap-4">
              <h3 className="text-2xl uppercase font-bold">Categories</h3>
              <div className="w-full bg-enveus-primary h-1"></div>
            </div>
            <div className="flex-1 flex flex-col gap-4 xl:gap-0 xl:justify-between">
              <LeftBarOption className="opacity-0 uppercase" ref={el => categoryRefs.current[0] = el} id="#guildMeetings" option="Guild meetings"/>
              <LeftBarOption className="opacity-0 uppercase" ref={el => categoryRefs.current[1] = el} id="#nodeSieges" option="Node sieges"/>
              <LeftBarOption className="opacity-0 uppercase" ref={el => categoryRefs.current[2] = el} id="#pvpEvents" option="Pvp events"/>
              <LeftBarOption className="opacity-0 uppercase" ref={el => categoryRefs.current[3] = el} id="#guildEvents" option="Guild events"/>
              <LeftBarOption className="opacity-0 uppercase" ref={el => categoryRefs.current[4] = el} id="#highlights" option="Highlights"/>
              <LeftBarOption className="opacity-0 uppercase" ref={el => categoryRefs.current[5] = el} id="#randomEvents" option="Random events"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-14 mt-14">
          <section id="guildMeetings" className="flex flex-col gap-12 scroll-m-32">
            <div ref={guildMeetingTitleRef} className="opacity-0">
              <Title title="Guild Meetings" type={TitleType.Big} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-meeting-1.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-meeting-1.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-meeting-1.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-meeting-2.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-meeting-2.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-meeting-2.jpeg"/>
            </div>
          </section>
          <section id="nodeSieges" className="flex flex-col gap-12 scroll-m-32">
            <Title title="Node sieges" type={TitleType.Big} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-1.webp"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-1.webp"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-1.webp"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-2.avif"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-2.avif"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-2.avif"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-3.webp"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-3.webp"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-node-sieges-3.webp"/>
            </div>
          </section>
          <section id="pvpEvents" className="flex flex-col gap-12 scroll-m-32">
            <Title title="Pvp Events" type={TitleType.Big} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-pvp-events-1.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-pvp-events-1.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-pvp-events-1.jpeg"/>
            </div>
          </section>
          <section id="guildEvents" className="flex flex-col gap-12 scroll-m-32">
            <Title title="Guild Events" type={TitleType.Big} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-events-1.png"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-events-1.png"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-events-1.png"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-events-1.png"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-events-1.png"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-guild-events-1.png"/>
            </div>
          </section>
          <section id="highlights" className="flex flex-col gap-12 scroll-m-32">
            <Title title="Highlights" type={TitleType.Big}/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-highlights-1.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-highlights-1.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-highlights-1.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-highlights-2.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-highlights-2.jpeg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-highlights-2.jpeg"/>
            </div>
          </section>
          <section id="randomEvents" className="flex flex-col gap-12 scroll-m-32">
            <Title title="Random Events" type={TitleType.Big}/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-random-events-1.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-random-events-1.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-random-events-1.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-random-events-2.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-random-events-2.jpg"/>
              <Video title="Enveus vs titan" subtitle="Enveus vs titan" imgSrc="/assets/img/img-videos-random-events-2.jpg"/>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
