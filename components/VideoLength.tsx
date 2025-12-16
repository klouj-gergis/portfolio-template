"use client";
import { useRef, useState } from "react"
import { formatDuration } from "@/lib/services"

export default function VideoLength({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState<string | null>(null)

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const durationFormated = formatDuration(videoRef.current.duration)
      setDuration(durationFormated) // seconds
    }
  }



  return (
    <>
      <video
        ref={videoRef}
        src={src}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
        className="hidden"
      />
      {duration && <p>{duration}</p>}
    </>
  )
}
