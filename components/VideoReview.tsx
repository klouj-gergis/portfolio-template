"use client";

export default function VideoReview({assetLink}: {assetLink: string}) {
  return (
    <>
      <video
          src={assetLink}
          controls
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          preload="metadata"
          className="w-full rounded-2xl"
        />
    </>
  )
}
