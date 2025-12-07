

export default function StatusCard({ title, status }: { title: string; status: number }) {
  return (
    <div className="p-4 border rounded-lg bg-cards shadow-md flex flex-col items-center">
      <h3 className="font-heading text-text-secondary">{title.toUpperCase()}</h3>
      <p className="text-5xl font-heading">{status}</p>
    </div>
  )
}
