import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Daniels Medkit Download!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          <a href="https://gateway.pinata.cloud/ipfs/QmPHmWRpxveipMVAZCvHnPsv9KhnsqKqWbemXFSsGA8ahN">Merry Christmas!</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
