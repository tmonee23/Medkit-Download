import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Daniels Medkit Download!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          <a href="https://medkitdaniel.s3.eu-central-1.amazonaws.com/Medkit-86d6c38723a743a6a5ae04e0937a00d6-signed.apk">Merry Christmas!</a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Download the medkit file</a>
        </p>
      </main>
    </div>
  )
}
