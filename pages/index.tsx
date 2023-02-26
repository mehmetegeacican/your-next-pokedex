import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <main >
        <div >
          <p>
            Get started by editing&nbsp;
            <code>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  )
}
