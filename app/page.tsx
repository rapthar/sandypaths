import Link from 'next/link'
import styles from './Home.module.styl'

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Sandy Paths</h1>
      <p className={styles.description}>
        Explore the beauty of sandy beaches and coastal trails.
      </p>
      <Link href="/explore" className={styles.exploreButton}>
        Start Exploring
      </Link>
    </main>
  )
}