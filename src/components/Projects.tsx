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
    <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
      <div ref={headerRef} className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Innovative Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Showcasing my work in machine learning, predictive analytics, and data-driven solutions.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card glass group relative p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden`}
          >
            {/* Background Gradient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              <button className="text-gray-500 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </button>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/5"
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
