export function formatDuration(seconds: number) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)

  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`
  }

  return `${m}:${s.toString().padStart(2, "0")}`
}


export function capitalizeFirstLetter(string: string){
  const strings = string.split('.')
  const capitalizedStrs = strings.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1) 
  })
  return capitalizedStrs.join(' ')
}