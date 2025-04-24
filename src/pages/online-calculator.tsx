// src/pages/online-calculator.tsx
import Head from 'next/head'
export default function OnlineCalculator() {
  return (
    <>
      <Head>
        <title>온라인 계산기 – Vintage Calculator</title>
        <meta name="description" content="무료 반응형 온라인 계산기 – 소수, 퍼센트, GT 기능 지원" />
        <link rel="canonical" href="https://calculator.jaychis.com/online-calculator" />
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-serif mb-4">온라인 계산기</h1>
        <p>웹 브라우저에서 바로 사용할 수 있는 무료 계산기입니다. 소수점, % 계산, GT 기능 탑재.</p>
        {/* 메인 컴포넌트에도 내부 링크 추가 */}
        <a href="/">← 메인으로 돌아가기</a>
      </main>
    </>
  )
}
