import styles from '@/styles/Home.module.css'
import { Navbar, Footer, Hero } from '@/components'


export default function Home() {
  return (
    <>
      
          <main className={styles.main}>
            <Navbar />

            <Hero />

            <Footer />
          </main>
      
    </>
  )
}
