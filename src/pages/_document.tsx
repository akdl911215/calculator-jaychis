// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* ───── 기본 메타 (기본 문자 인코딩, 설명, 정식 URL 지정) ───── */}
          <meta charSet="UTF-8" />
          {/* 페이지 설명: 검색 결과 요약에 사용 */}
          <meta
            name="description"
            content="Vintage Calculator – 무료 반응형 온라인 계산기"
          />
          {/* 중복 URL 이슈 방지용, 페이지의 공식 주소 지정 */}
          <link
            rel="canonical"
            href="https://calculator.jaychis.com"
          />

          {/* ───── Open Graph (SNS 공유 카드) ───── */}
          {/* 공유될 제목 */}
          <meta
            property="og:title"
            content="Vintage Calculator – 반응형 온라인 계산기"
          />
          {/* 공유될 설명 */}
          <meta
            property="og:description"
            content="Tailwind CSS 기반 빈티지 스타일 계산기 – PC·모바일 최적화"
          />
          {/* 공유될 대표 이미지 URL */}
          <meta
            property="og:image"
            content="https://calculator.jaychis.com/og-image.png"
          />
          {/* 이 페이지의 URL */}
          <meta
            property="og:url"
            content="https://calculator.jaychis.com"
          />
          {/* 트위터 카드 타입 지정 (큰 이미지 카드) */}
          <meta name="twitter:card" content="summary_large_image" />

          {/* ───── 구조화된 데이터 (JSON-LD) ───── */}
          {/* 검색 엔진에 소프트웨어 애플리케이션 정보 제공 */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Vintage Calculator",
                url: "https://calculator.jaychis.com",
                applicationCategory: "Utilities",
                operatingSystem: "All",
                browserRequirements: "Modern browser",
              }),
            }}
          />
        </Head>
        <body>
          {/* 실제 페이지 콘텐츠 시작 */}
          <Main />
          {/* Next.js가 자동으로 삽입하는 스크립트 */}
          <NextScript />
        </body>
      </Html>
    )
  }
}
