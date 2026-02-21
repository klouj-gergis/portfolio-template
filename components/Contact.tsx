import React from "react";
import { contactMethodes } from "@/lib/data";
import Link from "next/link";
import SimpleIconC from "@/components/SimpleIcon";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="bg-background  rounded-xl shadow-md p-6 w-full flex justify-center items-center relative z-0 py-20 flex-col">
        <h2 className="text-4xl font-bold text-accent mb-4">Get in Touch</h2>
        <p className="text-3xl w-4/6 text-text-main font-bold mb-8 text-center">Have an idea in mind or need a designer who actually understands your vision?
I’d love to hear about your project and see how we can turn it into something impactful.
Let’s talk and make it happen.</p>
<a href="https://wa.me/201270281411" className="text-accent bg-primary p-3 rounded-md">let's wrok Together</a>
    </section>
  );
}
