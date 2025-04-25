// src/components/Nav.tsx
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="bg-[#2a1a0a] text-amber-100 font-serif shadow-md px-4">
      <div className="flex items-center justify-center space-x-6 py-3">
        <Link href="/" className="hover:text-amber-400 transition-colors">
          Home
        </Link>
        <Link href="/online-calculator" className="hover:text-amber-400 transition-colors">
          온라인 계산기
        </Link>
        <Link href="/vintage-calculator" className="hover:text-amber-400 transition-colors">
          빈티지 계산기
        </Link>
        <Link href="/percent-calculator" className="hover:text-amber-400 transition-colors">
          퍼센트 계산기
        </Link>
        <Link href="/faq" className="hover:text-amber-400 transition-colors">
          FAQ
        </Link>
      </div>
    </nav>
  )
}
