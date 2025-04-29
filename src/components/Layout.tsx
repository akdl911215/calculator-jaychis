// src/components/Layout.tsx
import Nav from "./Nav"
import type { ReactNode } from "react"

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col">
      {/* sm 이하 (640px 미만) 에서는 숨기고, 그 이상이면 보여줌 */}
      <div className="hidden sm:block">
        <Nav />
      </div>

      <main className="flex-grow flex justify-center items-center p-6">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
    </div>
  )
}
