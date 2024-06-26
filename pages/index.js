import Head from 'next/head'
import NavBar from '../comps/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SpaceWaffles</title>
        <meta name="Space Waffles" content="Jack Hartwig" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar></NavBar>
        <video className={styles.backgroundVideo} src='childhood.mp4' autoPlay loop muted></video>
        <h1 className={styles.mainText}>SpaceWaffles</h1>
      </main>

    </div>
  )
}
