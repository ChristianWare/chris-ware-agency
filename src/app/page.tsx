import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  )
}
