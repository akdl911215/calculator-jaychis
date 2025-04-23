// src/components/Calculator/Display.tsx
type Props = { value: string }

export default function Display({ value }: Props) {
  return (
    <div className="bg-[#e8d0a9] rounded-md p-4 mb-4 text-right font-serif text-4xl shadow-inner border-2 border-[#8B4513] text-[#2a1a0a] min-h-[3.5rem]">
      {value}
    </div>
  )
}
