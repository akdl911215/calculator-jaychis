// src/components/Nav.tsx
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex space-x-4 mb-6">
      <Link href="/">Home</Link>
      <Link href="/online-calculator">온라인 계산기</Link>
      <Link href="/vintage-calculator">빈티지 계산기</Link>
      <Link href="/percent-calculator">퍼센트 계산기</Link>
      <Link href="/faq">FAQ</Link>
    </nav>
  )
}
