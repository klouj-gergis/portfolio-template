"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="w-full border-t text-center py-5 bg-white text-primary font-bold text-lg">
      <p><span>MGOMY</span>, Powered by Kojy.Dev {currentYear}</p>
    </div>
  )
}
