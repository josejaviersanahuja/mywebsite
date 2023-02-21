import Head from 'next/head'
import { Work_Sans, Nothing_You_Could_Do, Cabin } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { trpcClient } from 'trpcClient'
import { useEffect } from 'react'

import Logo from '@/icons/Logo'

const ffHeaders = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700', '800']
})
const ffSpecial = Nothing_You_Could_Do({ 
  subsets: ['latin'],
  weight: '400'
})
const ffBody = Cabin({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

/* WAY TO USE LOCAL FONTS
import localFont from '@next/font/local'
const ffLocal = localFont({
  src: '/fonts/Inter-Regular.woff2',
})
 */

export default function Home() {
  
  useEffect(() => {
    trpcClient.hello.query({name: 'Jorge'})
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [])

  console.log(styles);
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p >Hola parrafo 1 lo suficientemente largo para que pase algo distinto</p>
        
      </main>
    </>
  )
}
