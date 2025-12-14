import React from 'react';

export default function Contact() {
  return (
    <section className="bg-cards h-screen rounded-xl shadow-md p-6 w-full flex justify-center items-center">
      <div  className="bg-primary  rounded-xl shadow-md p-6 w-full mx-auto my-10">
      <h2 className="text-2xl font-bold text-primary-700 mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <label>
          <span className="block text-primary-600 mb-1">Name</span>
          <input
            type="text"
            className="w-full border border-primary-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          <span className="block text-primary-600 mb-1">Email</span>
          <input
            type="email"
            className="w-full border border-primary-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            placeholder="your@email.com"
            required
          />
        </label>
        <label>
          <span className="block text-primary-600 mb-1">Message</span>
          <textarea
            className="w-full border border-primary-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            placeholder="Your message"
            rows={4}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-foreground text-background py-2 px-6 rounded hover:bg-primary-600 transition-colors font-bold"
        >
          Send
        </button>
      </form>
      
      </div>
    </section>
  );
}
