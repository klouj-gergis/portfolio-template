import { siWhatsapp, siInstagram } from "simple-icons";


export const statusData = [
  { title: "Projects", status: 120 },
  { title: "Clients", status: 75 },
  { title: "Awards", status: 15 },
]


export const projects = [
  {
    title: 'first project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './land-o-lakes-inc-DWv3vEGKW1E-unsplash.jpg'
  },
  {
    title: 'second project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './land-o-lakes-inc-UnSFmJCCrW0-unsplash.jpg'
  },
  {
    title: 'third project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './luigi-ritchie-3ZAKE8qVTK0-unsplash.jpg'
  },
  {
    title: 'fourth project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './philippe-bontemps-kZPxXgwOETQ-unsplash.jpg'
  }
]


export const testimonials = [
  {
    name: "Alex Morgan",
    role: "YouTube Content Creator",
    image: "/hero.jpg",
    quote:
      "Working with this editor completely changed the quality of my content. The pacing, storytelling, and attention to detail are on another level."
  },
  {
    name: "Sarah Williams",
    role: "Brand Manager",
    image: "/hero.jpg",
    quote:
      "Professional, fast, and incredibly creative. Every project was delivered on time and exceeded our expectations."
  },
  {
    name: "Daniel Cruz",
    role: "Music Artist",
    image: "/hero.jpg",
    quote:
      "The final video captured the exact emotion I wanted. Clean edits, great color grading, and smooth communication throughout the process."
  },
  {
    name: "Lina Hassan",
    role: "Social Media Creator",
    image: "/hero.jpg",
    quote:
      "Amazing experience from start to finish. The edits feel cinematic and engaging, and my audience noticed the difference immediately."
  }
];

export type TestimonialType = {
  name: string,
  role: string,
  image: string,
  quote: string
}



export const contactMethodes =  [
  {
    title: "whatsApp" ,
    link: "https://wa.me/201012425386",
    icon: siWhatsapp,
    color: "#25D366"
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/klo_0j?igsh=MW81aGFtZHR3N3h2ZQ==",
    icon: siInstagram,
    color: "#FF0069"
  }
]