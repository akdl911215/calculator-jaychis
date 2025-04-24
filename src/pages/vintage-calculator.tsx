// src/pages/vintage-calculator.tsx
import Head from 'next/head'
import Link from 'next/link'
import Calculator from '@/components/Calculator/Calculator'

export default function VintageCalculatorPage() {
  return (
    <>
      <Head>
        <title>Vintage Calculator – 빈티지 스타일 온라인 계산기</title>
        <meta
          name="description"
          content="빈티지 디자인의 무료 온라인 계산기 – 퍼센트, GT, 기본 연산 지원"
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/vintage-calculator"
        />
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-serif mb-4">빈티지 계산기</h1>
        <p className="mb-6">
          1920년대 감성의 빈티지 스타일 계산기입니다. Tailwind CSS로 완전 구현,
          모바일·데스크톱 반응형 레이아웃.
        </p>
        {/* 직접 계산기 UI 삽입 */}
        <Calculator />
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            ← 메인으로 돌아가기
          </Link>
        </div>
      </main>
    </>
  )
}
