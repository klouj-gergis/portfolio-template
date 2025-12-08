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
    <section id="projects" className="w-full min-h-screen bg-background p-10 sticky top-0">
      <h2 className="text-4xl h-2/12 text-accent font-bold mb-10 text-center">Projects Section</h2>
      <div ref={container} className="w-full min-h-10/12 lg:min-h-screen flex flex-col items-center justify-center sticky top-1/12">
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
