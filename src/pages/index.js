import Head from 'next/head'
import styles from '../styles/layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sergio Andrés Flérez López</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav>
          <ul>
            <li><span>Hello</span></li>
            <li><span>I am</span></li>
            <li><span>S. Andres F.</span></li>
          </ul>
        </nav>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Sergio Andres Florez Lopez 
          <div>Linkedin</div>
        </a>
      </footer>
    </div>
  )
}
