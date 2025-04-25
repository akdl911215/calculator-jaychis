// src/pages/vintage-calculator.tsx
import Head from "next/head"
import Link from "next/link"

export default function VintageCalculatorPage() {
  return (
    <>
      <Head>
        {/* 기본 메타 */}
        <title>빈티지 계산기 – Vintage Calculator</title>
        <meta
          name="description"
          content="클래식 브라운 톤 빈티지 스타일 계산기 설명 페이지입니다."
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/vintage-calculator"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="빈티지 계산기 – Vintage Calculator"
        />
        <meta
          property="og:description"
          content="클래식 브라운 톤 빈티지 스타일 계산기 설명 페이지입니다."
        />
        <meta
          property="og:url"
          content="https://calculator.jaychis.com/vintage-calculator"
        />
        <meta
          property="og:image"
          content="https://calculator.jaychis.com/og-image.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1 className="text-3xl font-serif mb-2">빈티지 계산기</h1>
      <p className="mb-6 text-center">
        클래식한 브라운 톤의 빈티지 디자인 계산기입니다.
        Tailwind CSS로 구현되었으며, 소수점·퍼센트·GT 기능을 모두 갖추었습니다.
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
