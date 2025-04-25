// src/pages/vintage-calculator.tsx
import Head from "next/head"
import Calculator from "@/components/Calculator/Calculator"

export default function VintageCalculatorPage() {
  return (
    <>
      <Head>
        <title>빈티지 계산기 – Vintage Calculator</title>
        <meta
          name="description"
          content="1920년대 감성의 빈티지 스타일 계산기 – 반응형, 퍼센트·GT 기능 지원"
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/vintage-calculator"
        />
      </Head>

      <h1 className="text-3xl font-serif mb-2">빈티지 계산기</h1>
      <p className="mb-4">
        클래식한 브라운 톤의 빈티지 디자인 계산기입니다.
        Tailwind CSS로 구현되었으며, 소수점·퍼센트·GT 기능을 모두 갖추었습니다.
      </p>

      <Calculator />
    </>
  )
}
