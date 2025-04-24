// src/pages/faq.tsx
import Head from 'next/head'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ – Vintage Calculator</title>
        <meta name="description" content="퍼센트 계산, GT 기능 등 자주 묻는 질문 정리" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  name: "퍼센트 계산은 어떻게 하나요?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "먼저 숫자를 입력한 뒤 % 버튼을 누르면 현재 값의 1% 단위로 계산됩니다."
                  }
                },
                {
                  "@type": "Question",
                  name: "GT 기능은 무엇인가요?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "이전 계산 결과를 모두 더해주는 Grand Total 기능입니다."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-serif mb-4">자주 묻는 질문 (FAQ)</h1>
        <dl className="space-y-6">
          <dt className="font-semibold">퍼센트 계산은 어떻게 하나요?</dt>
          <dd>먼저 숫자를 입력한 뒤 <kbd>%</kbd> 버튼을 누르면 현재 값의 1% 단위로 계산됩니다.</dd>
          <dt className="font-semibold">GT 기능은 무엇인가요?</dt>
          <dd>이전 계산 결과를 모두 더해주는 Grand Total 기능입니다.</dd>
        </dl>
      </main>
    </>
  )
}
