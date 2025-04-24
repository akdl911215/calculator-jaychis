// src/components/Display.tsx
type Props = { value: string }

export default function Display({ value }: Props) {
  return (
    <div
      className={`
        bg-[#e8d0a9] rounded-md mb-4
        border-2 border-[#8B4513] box-border
        font-serif text-4xl leading-tight
        grid items-center justify-items-end
        px-4 h-20
        overflow-x-auto whitespace-nowrap

        /* ↓ ensure lining AND tabular numbers */
        lining-nums tabular-nums
      `}
    >
      {value}
    </div>
  )
}
