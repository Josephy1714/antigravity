"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-card > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 px-8 min-h-screen flex flex-col items-center justify-center relative"
    >
      <div className="contact-card max-w-7xl w-full text-center relative py-20">
        <h2 className="text-7xl md:text-[10rem] font-black mb-16 tracking-tighter leading-none bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent uppercase">
          Build The <span className="italic text-blue-500">Future</span>
        </h2>
        
        <p className="text-gray-400 text-2xl md:text-4xl mb-24 max-w-5xl mx-auto font-light leading-snug tracking-tight">
          Ready to collaborate on data-driven projects or just discuss the future of AI?
        </p>

        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
          <a 
            href="mailto:ombatijoseph640@gmail.com"
            className="group relative inline-flex items-center justify-center px-16 py-8 font-bold text-white transition-all duration-500 transform bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 hover:border-blue-500 hover:scale-105 hover:-translate-y-2 uppercase tracking-widest"
          >
            <Mail className="mr-6 transition-transform" size={32} />
            <span className="relative text-2xl">Email</span>
          </a>

          <a 
            href="https://wa.me/254111691657"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-16 py-8 font-bold text-white transition-all duration-500 transform bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-600 hover:border-emerald-500 hover:scale-105 hover:-translate-y-2 uppercase tracking-widest"
          >
            <Phone className="mr-6 transition-transform" size={32} />
            <span className="relative text-2xl">WhatsApp</span>
          </a>
        </div>
      </div>

      <footer className="absolute bottom-10 left-0 w-full text-center">
        <p className="text-gray-600 font-mono text-xs uppercase tracking-[1em]">
          &copy; 2026 Innovation Driven
        </p>
      </footer>
    </section>
  );
}
