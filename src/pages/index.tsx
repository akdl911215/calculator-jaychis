import Head from 'next/head'
import Calculator from '@/components/Calculator/Calculator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vintage Calculator</title>
        <meta name="description" content="Retro-styled calculator" />
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-6">
        <Calculator />
      </div>
    </>
  )
}