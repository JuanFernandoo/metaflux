type InfoProps = {
  label: string
  value: string
}

export function Info({ label, value }: InfoProps) {
  return (
    <div className="flex flex-col">
      <span className="text-zinc-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}