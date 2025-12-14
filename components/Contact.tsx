import React from 'react';
import { contactMethodes } from "@/lib/data";
import Link from 'next/link';
import SimpleIconC from "@/components/SimpleIcon";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-background min-h-screen rounded-xl shadow-md p-6 w-full flex justify-center items-center relative z-0 py-20">
      <div  className="bg-white rounded-xl shadow-md lg:p-6 w-full lg:w-9/12 flex gap-5 flex-col lg:flex-row lg:justify-between items-center  mx-auto my-10">
      {
        contactMethodes && (
          <div className="w-full lg:w-6/12 flex flex-col">
            <Image alt="contact section vector image" src="/contact-vec.jpg" width={600} height={50} />
          <ul className="flex h-full items-center justify-center gap-5">
            {
              contactMethodes.map((method) => (
                <li key={method.title} className="bg-foreground border border-primary hover:border-0 p-3 rounded">
                  <Link href={method.link} className="flex flex-col items-center gap-2">
                    <SimpleIconC icon={method.icon} size={30} color={method.color} />
                    <span className="text-primary  font-heading text-xl">{method.title.toUpperCase()}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
          </div>
        )
      }
      <div className="w-full lg:w-6/12 pl-30">
      <h2 className="text-3xl font-bold text-primary text-center my-5">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <label>
          <span className="block text-foreground mb-1">Name</span>
          <input
            type="text"
            className="w-full bg-primary/20 text-primary font-semibold rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground"
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          <span className="block text-foreground mb-1">Email</span>
          <input
            type="email"
            className="w-full bg-primary/20 text-primary font-semibold rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground"
            placeholder="your@email.com"
            required
          />
        </label>
        <label>
          <span className="block  mb-1">Message</span>
          <textarea
            className="w-full bg-primary/20 text-primary font-semibold rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground"
            placeholder="Your message"
            rows={4}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-cards tracking-wider text-foreground py-2 px-6 rounded hover:bg-cards/90 cursor-pointer transition-colors font-bold lg:col-start-4"
        >
          Send
        </button>
      </form>
      </div>
      </div>
    </section>
  );
}
