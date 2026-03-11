"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ExternalLink, Database, Cpu, BarChart3, Globe } from "lucide-react";

const projects = [
  {
    title: "Predictive Analytics Engine",
    description: "A machine learning solution for forecasting market trends using time-series analysis and deep learning models.",
    tags: ["Python", "TensorFlow", "Pandas"],
    icon: <Database className="text-blue-400" size={32} />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "AI-Driven Healthcare Insights",
    description: "Developing models to assist in early disease detection and treatment outcome prediction using large-scale health data.",
    tags: ["R", "Scikit-Learn", "Healthcare"],
    icon: <Cpu className="text-purple-400" size={32} />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Interactive Data Visualizations",
    description: "Immersive dashboards and visual stories built to demystify complex social and economic datasets.",
    tags: ["Tableau", "D3.js", "SQL"],
    icon: <BarChart3 className="text-emerald-400" size={32} />,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Autonomous Supply Chain AI",
    description: "Optimization algorithms for real-time logistics tracking and inventory management using reinforcement learning.",
    tags: ["Python", "PyTorch", "AI"],
    icon: <Globe className="text-orange-400" size={32} />,
    color: "from-orange-500/20 to-amber-500/20"
  }
];

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto min-h-screen">
      <div ref={headerRef} className="mb-24 text-left border-l-4 border-blue-500 pl-10">
        <h2 className="text-6xl md:text-9xl font-black mb-8 bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent uppercase tracking-tighter">
          Case Studies
        </h2>
        <p className="text-gray-400 max-w-3xl text-2xl font-light leading-relaxed">
          Exploring the intersection of artificial intelligence and real-world impact.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card group relative py-12 transition-all duration-700`}
          >
            <div className="flex items-center gap-6 mb-8 text-blue-500">
               {project.icon}
               <div className="h-px flex-1 bg-white/10 group-hover:bg-blue-500/50 transition-colors"></div>
            </div>
            
            <h3 className="text-4xl font-bold mb-6 group-hover:text-blue-400 transition-all uppercase tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-xl mb-10 leading-relaxed font-light max-w-xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 group-hover:border-blue-500/30 transition-colors pb-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
