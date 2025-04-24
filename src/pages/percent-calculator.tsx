// src/pages/percent-calculator.tsx
import Head from 'next/head'
import Link from 'next/link'
import Calculator from '@/components/Calculator/Calculator'

export default function PercentCalculatorPage() {
  return (
    <>
      <Head>
        <title>퍼센트 계산기 – Vintage Calculator</title>
        <meta
          name="description"
          content="쉽고 빠른 퍼센트 계산 전용 페이지 – 현재 값의 %를 즉시 계산"
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/percent-calculator"
        />
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-serif mb-4">퍼센트 계산기</h1>
        <p className="mb-6">
          숫자를 입력한 뒤 <kbd>%</kbd> 버튼을 누르면, 현재 값의 퍼센트가
          즉시 계산됩니다.
        </p>
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
