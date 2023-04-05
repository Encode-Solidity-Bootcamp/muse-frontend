import styles from '@/styles/Home.module.css'
import { Navbar, Footer, Hero, Features } from '@/components'


export default function Home() {
  return (
    <>
      
          <main className={styles.main}>
            <Navbar />

            <Hero />
            <Features />

            <Footer />
          </main>
      
    </>
  )
}
