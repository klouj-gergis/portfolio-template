"use client";
import React from 'react'
import {projects} from "@/./lib/data"
import ProjectCard from "@/components/PorjectCard"
import { useScroll } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const container = useRef(null);
  const { scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section id="projects" className="w-full min-h-[70vh] lg:min-h-screen flex flex-col items-center justify-center p-10 bg-background border-b">
      <h2 className="text-4xl text-accent font-bold mb-10">Projects Section</h2>
      <div ref={container} className="w-full flex flex-col items-center justify-center">
      {
        projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);
          return (
            
              <ProjectCard {...project} i={index} targetScale={targetScale} progress={scrollYProgress} range={[index * 0.2, 1]} key={index} />
            
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio