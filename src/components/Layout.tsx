// src/components/Layout.tsx
import Nav from "./Nav"
import type { ReactNode } from "react"

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col">
      <Nav />
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
    </div>
  )
}
