"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-32 px-4 min-h-[80vh] flex flex-col items-center justify-center relative"
    >
      <div className="contact-card glass p-10 md:p-20 rounded-[3rem] border border-white/10 max-w-4xl w-full text-center relative overflow-hidden backdrop-blur-2xl">
        {/* Glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[120px] -z-10"></div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
          Let's Build Something <span className="italic text-blue-500">Innovative</span>
        </h2>
        
        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Ready to collaborate on data-driven projects or just want to say hi? I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Email Button */}
          <a 
            href="mailto:ombatijoseph640@gmail.com"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 transform bg-slate-900 rounded-full hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] border border-blue-500/50"
          >
            <div className="absolute inset-0 w-full h-full bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <Mail className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
            <span className="relative text-lg">Email Me</span>
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/254111691657"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 transform bg-emerald-900/20 rounded-full hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] border border-emerald-500/30"
          >
            <div className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <Phone className="mr-3 group-hover:-rotate-12 transition-transform" size={24} />
            <span className="relative text-lg">WhatsApp</span>
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-gray-500">
           <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
             <span className="text-sm font-mono tracking-widest">Nairobi, Kenya</span>
           </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="absolute bottom-10 left-0 w-full text-center">
        <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.5em]">
          &copy; 2026 Designed for Excellence
        </p>
      </footer>
    </section>
  );
}
