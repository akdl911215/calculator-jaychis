// src/pages/online-calculator.tsx
import Head from "next/head"
import Calculator from "@/components/Calculator/Calculator"

export default function OnlineCalculatorPage() {
  return (
    <>
      <Head>
        <title>온라인 계산기 – Vintage Calculator</title>
        <meta
          name="description"
          content="웹 브라우저에서 바로 사용하는 무료 온라인 계산기 – 소수점, % 계산, GT 기능 지원"
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/online-calculator"
        />
      </Head>

      {/* 페이지 설명 */}
      <h1 className="text-3xl font-serif mb-2">온라인 계산기</h1>
      <p className="mb-4">
        웹 브라우저에서 바로 사용할 수 있는 무료 온라인 계산기입니다.
        소수점, % 계산, GT 기능을 지원합니다.
      </p>

      {/* 계산기 컴포넌트 */}
      <Calculator />
    </>
  )
}
