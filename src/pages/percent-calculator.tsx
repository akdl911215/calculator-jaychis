// src/pages/percent-calculator.tsx
import Head from "next/head"
import Link from "next/link"

export default function PercentCalculatorPage() {
  return (
    <>
      <Head>
        {/* 기본 메타 */}
        <title>퍼센트 계산기 – Vintage Calculator</title>
        <meta
          name="description"
          content="현재 값의 퍼센트를 즉시 계산해 주는 전용 퍼센트 계산기 설명 페이지입니다."
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/percent-calculator"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="퍼센트 계산기 – Vintage Calculator"
        />
        <meta
          property="og:description"
          content="현재 값의 퍼센트를 즉시 계산해 주는 전용 퍼센트 계산기 설명 페이지입니다."
        />
        <meta
          property="og:url"
          content="https://calculator.jaychis.com/percent-calculator"
        />
        <meta
          property="og:image"
          content="https://calculator.jaychis.com/og-image.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1 className="text-3xl font-serif mb-2">퍼센트 계산기</h1>
      <p className="mb-6 text-center">
        숫자를 입력한 뒤 <kbd>%</kbd> 버튼을 누르면, 입력값의 퍼센트를
        즉시 계산해 줍니다.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#8B4513] text-amber-100 font-serif py-2 px-4 rounded shadow hover:bg-[#6d3710] transition-colors"
      >
        Home으로 돌아가기
      </Link>
    </>
  )
}
