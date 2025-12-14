import React from 'react';

export default function Contact() {
  return (
    <section className="bg-cards h-screen rounded-xl shadow-md p-6 w-full flex justify-center items-center relative z-0">
      <div  className="bg-primary  rounded-xl shadow-md p-6 w-full lg:w-6/12 mx-auto my-10">
      <h2 className="text-2xl font-bold text-foreground text-center my-5">Contact Me</h2>
      <form className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
        <label className="lg:col-span-2">
          <span className="block text-foreground mb-1">Name</span>
          <input
            type="text"
            className="w-full border border-foreground rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="lg:col-start-3 lg:col-span-2">
          <span className="block text-foreground mb-1">Email</span>
          <input
            type="email"
            className="w-full border border-foreground rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            placeholder="your@email.com"
            required
          />
        </label>
        <label className="lg:col-span-4">
          <span className="block textforegroundprimary mb-1">Message</span>
          <textarea
            className="w-full border borderforegroundprimary-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            placeholder="Your message"
            rows={4}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-foreground text-background py-2 px-6 rounded hover:bg-primary-600 transition-colors font-bold lg:col-start-4"
        >
          Send
        </button>
      </form>
      
      </div>
    </section>
  );
}
