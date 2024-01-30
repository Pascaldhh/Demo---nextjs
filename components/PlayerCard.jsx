"use client"
import styles from "@styles/components/PlayerCard.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function PlayerCard({title, subtitle, src, color, isLive, discordURL, instagramURL, twitchURL, className}) {
  const cardRef = useRef();
  const imgRef = useRef();
  
  useLayoutEffect(() => {
    const card = cardRef.current;

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.set(card, {y: -100, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(card, { scrollTrigger: { trigger: card, start: "top bottom-=250", toggleActions: "play none none reverse" }, y: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className={className}>
      <div style={color ? { "--clr-card": color} : {}} className={"group p-5 max-w-[300px] w-100 rounded-md bg-enveus-card border-2 border-enveus-card hover:border-[color:var(--clr-card)] transition-colors " + styles.card}>
        <div className={"overflow-hidden relative after:absolute after:w-full after:h-full after:inset-0 after:bg-center after:transition-all " + styles.bgHoverAfter }>
          {isLive ?
            <>
              <p className="uppercase font-bold absolute top-0 bg-[color:var(--clr-card)] text-sm px-2 group-hover:-translate-x-full group-hover:scale-110 transition-transform z-30">Live</p>
              <p className="uppercase font-bold absolute top-0 bg-[color:var(--clr-card)] text-sm px-2 group-hover:translate-x-0 group-hover:scale-110 transition-transform z-30 right-0 translate-x-full">Live</p>
            </>
            : null
          }
          <img ref={imgRef} className="group-hover:scale-125 transition-transform" src={src} onLoad={ScrollTrigger.refresh} alt="Players img" />
        </div>
        <div className="font-bold uppercase">
          <h3 className="mt-2 text-xl">{title}</h3>
          <h4 className="text-sm text-[color:var(--clr-card)]">{subtitle}</h4>
          <div className="flex gap-2 mt-4">
            <a href={discordURL} target='_blank'><img src="/assets/img/logo-discord.svg" className="h-[18px]" alt="img to discord"/></a>
            <a href={instagramURL} target='_blank'><img src="/assets/img/logo-instagram.svg" className="h-[18px]" alt="img to instagram"/></a>
            <a href={twitchURL} target='_blank'><img src="/assets/img/logo-twitch.svg" className="h-[18px]" alt="img to twitch"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
