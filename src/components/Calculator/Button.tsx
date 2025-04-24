import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "operator" | "digit" | "equal"
}

export default function Button({
  variant = "digit",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base = "font-serif py-4 rounded-md shadow-md border border-amber-900 transition-colors flex items-center justify-center"
  const variants: Record<ButtonProps["variant"], string> = {
    primary:  "bg-[#8B4513] text-amber-100 hover:bg-[#6d3710]",
    operator: "bg-[#a67c52] text-amber-100 hover:bg-[#8d6a46]",
    digit:    "bg-[#d4b483] text-[#2a1a0a] hover:bg-[#c0a475]",
    equal:    "bg-[#8B4513] text-amber-100 hover:bg-[#6d3710]",
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}