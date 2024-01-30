"use client";

import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function RecordText({ className, record, recordClassName, text, textClassName }) {
  const recordWrapRef = useRef();
  const recordRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const recordCurrent = recordRef.current;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(recordCurrent, { innerText: 0 }, { scrollTrigger: { trigger: recordCurrent, toggleActions: "restart" }, innerText: record, duration: 2, snap: "innerText", ease: "power2.out" })
    }, recordWrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={recordWrapRef} className={className}>
      <div ref={recordRef} className={recordClassName}>{record}</div>
      <div className={textClassName}>{text}</div>
    </div>
  )
}
