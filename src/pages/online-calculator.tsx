// src/pages/online-calculator.tsx
import Head from "next/head"
import Link from "next/link"

export default function OnlineCalculatorPage() {
  return (
    <>
      <Head>
        {/* 기본 메타 */}
        <title>온라인 계산기 – Vintage Calculator</title>
        <meta
          name="description"
          content="웹 브라우저에서 바로 사용할 수 있는 무료 온라인 계산기입니다. 소수점·%·GT 기능 지원"
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/online-calculator"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="온라인 계산기 – Vintage Calculator"
        />
        <meta
          property="og:description"
          content="웹 브라우저에서 바로 사용할 수 있는 무료 온라인 계산기입니다. 소수점·%·GT 기능 지원"
        />
        <meta
          property="og:url"
          content="https://calculator.jaychis.com/online-calculator"
        />
        <meta
          property="og:image"
          content="https://calculator.jaychis.com/og-image.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1 className="text-3xl font-serif mb-2">온라인 계산기</h1>
      <p className="mb-6 text-center">
        웹 브라우저에서 바로 사용할 수 있는 무료 온라인 계산기입니다.
        소수점, % 계산, GT 기능을 지원합니다.
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
