// src/pages/percent-calculator.tsx
import Head from "next/head"
import Calculator from "@/components/Calculator/Calculator"

export default function PercentCalculatorPage() {
  return (
    <>
      <Head>
        <title>퍼센트 계산기 – Vintage Calculator</title>
        <meta
          name="description"
          content="현재 값의 퍼센트를 즉시 계산해 주는 전용 퍼센트 계산기"
        />
        <link
          rel="canonical"
          href="https://calculator.jaychis.com/percent-calculator"
        />
      </Head>

      <h1 className="text-3xl font-serif mb-2">퍼센트 계산기</h1>
      <p className="mb-4">
        숫자를 입력한 뒤 <kbd>%</kbd> 버튼을 누르면, 입력값의 퍼센트를
        즉시 계산해 줍니다.
      </p>

      <Calculator />
    </>
  )
}
