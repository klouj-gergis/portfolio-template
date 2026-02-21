'use client';
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";


export default function StatusCard({ title, start = 0, status = 100, duration = 2000 }: { title: string; start?: number, status: number, duration?: number }) {

    const [value, setValue] = useState(start);
  const ref = useRef(start);
  const elRef = useRef(null);

  // Watch the actual element
  const isInView = useInView(elRef, { once: false });

  const counter = status / 200;

  const count = () => {
    if (ref.current < status) {
      const result = Math.ceil(ref.current + counter);
      setValue(result);
      ref.current = result;

      setTimeout(count, duration / (status - start)); // continue
    }
  };

  useEffect(() => {
    if (isInView) {
      // Reset when entering the viewport
      ref.current = start;
      setValue(start);

      count();
    }
  }, [isInView, start, status]);

  return (
    <div ref={elRef} className="p-4 border rounded-lg bg-cards shadow-md flex flex-col items-center">
      <h3 className="font-heading text-text-secondary">{title.toUpperCase()}</h3>
      <p className="text-5xl font-heading text-accent">{value}</p>
    </div>
  )
}
