"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      }, "-=0.8")
      .from(universityRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(navRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <div 
          ref={subtitleRef}
          className="text-blue-400 font-mono tracking-widest uppercase mb-4"
        >
          Data Science Student
        </div>
        
        <h1 
          ref={titleRef}
          className="text-6xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2"
        >
          Joseph Ombati
        </h1>
        
        <div 
          ref={universityRef}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xl md:text-2xl text-gray-400 font-light mb-12"
        >
          <span>University of Nairobi</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span>Innovating through Data</span>
        </div>

        <div 
          ref={navRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 w-full mt-8"
        >
          {[
            { label: "About Me", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Skills", href: "/skills" },
            { label: "Contact", href: "/contact" }
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center justify-center gap-4 py-8 px-4 transition-all duration-300"
            >
              <span className="text-sm font-mono text-blue-400 tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Explore
              </span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                  {item.label.split(' ')[0]}
                </span>
                <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-blue-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
